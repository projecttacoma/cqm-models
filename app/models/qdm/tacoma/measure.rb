module CQM
  # Measure contains the information necessary to represent the CQL version of a Clinical Quality Measure,
  # As needed by the Bonnie & Cypress applications
  class Measure
    include Mongoid::Document
    include Mongoid::Timestamps

    TYPES = %w[ep eh].freeze

    IPP = 'IPP'.freeze
    DENOM = 'DENOM'.freeze
    NUMER = 'NUMER'.freeze
    NUMEX = 'NUMEX'.freeze
    DENEXCEP = 'DENEXCEP'.freeze
    DENEX = 'DENEX'.freeze
    MSRPOPL = 'MSRPOPL'.freeze
    OBSERV = 'OBSERV'.freeze
    MSRPOPLEX = 'MSRPOPLEX'.freeze

    STRAT = 'STRAT'.freeze

    ALL_POPULATION_CODES = [STRAT, IPP, DENOM, DENEX, NUMER, NUMEX, DENEXCEP, MSRPOPL, OBSERV, MSRPOPLEX].freeze

    CQL_SKIP_STATEMENTS = ['SDE Ethnicity', 'SDE Payer', 'SDE Race', 'SDE Sex'].freeze

    # A version-specific UUID for the measure
    field :hqmf_id, type: String
    # A version-neutral UUID for the measure
    field :hqmf_set_id, type: String
    # A Semantic Version-compliant string (e.g. "2.3.4") for the measure
    field :hqmf_version_number, type: String
    # A CMS-style string (e.g. "CMS2v4") for the measure
    field :cms_id, type: String
    field :title, type: String, default: ''
    field :description, type: String, default: ''
    # EP/EH, or "unknown"
    field :type, type: String
    field :category, type: String, default: 'uncategorized'

    # Measure type variables
    field :episode_of_care, type: Boolean
    field :continuous_variable, type: Boolean

    # ELM/CQL Measure-logic related data
    field :elm_annotations, type: Hash
    field :cql, type: Array
    field :elm, type: Array
    field :main_cql_library, type: String
    field :cql_statement_dependencies, type: Hash

    # HQMF/Tacoma-specific Measure-logic related data
    field :population_criteria, type: Hash
    field :data_criteria, type: Hash
    field :source_data_criteria, type: Hash
    field :measure_period, type: Hash
    field :measure_attributes, type: Array
    field :populations, type: Array
    field :populations_cql_map, type: Hash
    field :observations, type: Array
    # TODO: Depending on how we restructure the Measure/Population object, may be deleted in the future
    field :population_ids, type: Hash

    # Relations to other model classes
    belongs_to :bundle, class_name: 'HealthDataStandards::CQM::Bundle' # Cypress-specific, until we migrate the Bundle into cqm-models
    has_one :package, class_name: 'CqlMeasurePackage', inverse_of: :measure, dependent: :destroy # Bonnie-specific
    has_and_belongs_to_many :patients

    # Store this references as an Array on the Measure object,
    # but don't care about the inverse relationship (e.g. we never really care 
    # about getting all the measures from a ValueSet object,
    # hence the 'inverse_of: nil')
    has_and_belongs_to_many :value_sets, inverse_of: nil

    scope :by_measure_id, ->(id) { where('measure_id' => id) }
    scope :by_type, ->(type) { where('type' => type) }
    scope :by_user, ->(user) { where user_id: user.id }

    index 'user_id' => 1, 'hqmf_set_id' => 1

    # Find the measures matching a patient
    def self.for_patient(record)
      where user_id: record.user_id, hqmf_set_id: { '$in' => record.measure_ids }
    end

    # Returns the hqmf-parser's ruby implementation of an HQMF document.
    # Rebuild from population_criteria, data_criteria, and measure_period JSON
    def as_hqmf_model
      json = {
        'id' => measure_id,
        'title' => title,
        'description' => description,
        'population_criteria' => population_criteria,
        'data_criteria' => data_criteria,
        'source_data_criteria' => source_data_criteria,
        'measure_period' => measure_period,
        'attributes' => measure_attributes,
        'populations' => populations,
        'hqmf_id' => hqmf_id,
        'hqmf_set_id' => hqmf_set_id,
        'hqmf_version_number' => hqmf_version_number,
        'cms_id' => cms_id
      }
      HQMF::Document.from_json(json)
    end

    def all_data_criteria
      as_hqmf_model.all_data_criteria
    end

    # Note whether or not the measure is a continuous variable measure.
    before_save :set_continuous_variable
    def set_continuous_variable
      # The return value of this function is not related to whether or not this
      # measure is a CV measure. The true return value ensures false is not
      # accidentally returned here, which would cause the chain of 'before_*' to
      # stop executing.
      self.continuous_variable = populations.map(&:keys).flatten.uniq.include? HQMF::PopulationCriteria::MSRPOPL
      true
    end
  end
end
