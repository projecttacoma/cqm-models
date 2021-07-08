module CQM
  # Measure contains the information necessary to represent the CQL version of a Clinical Quality Measure,
  # As needed by the Bonnie & Cypress applications
  class Measure
    include Mongoid::Document
    include Mongoid::Timestamps

    # These are the Mongoid equivalent of the Mongoose "enum" attribute for the respective fields.
    # They throw an error if you try to assign a value that's not in the array.
    validates_inclusion_of :measure_scoring, in: %w[PROPORTION RATIO CONTINUOUS_VARIABLE COHORT]
    validates_inclusion_of :calculation_method, in: %w[PATIENT EPISODE_OF_CARE]

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

    # Composite/component measure fields
    field :composite, type: Boolean, default: false
    field :component, type: Boolean, default: false
    field :component_hqmf_set_ids, type: Array, default: []
    field :composite_hqmf_set_id, type: String

    # Measure type variables
    # Note: these are constrained to an enumeration of value options above, via validates_inclusion_of
    field :measure_scoring, type: String, default: 'PROPORTION'
    field :calculation_method, type: String, default: 'PATIENT'
    field :calculate_sdes, type: Boolean

    # ELM/CQL Measure-logic related data
    # Field name changed from 'cql' to 'cql_libraries' because the semantics of
    # embeds_many :cqls sounded weird
    embeds_many :cql_libraries, class_name: 'CQM::CQLLibrary'
    field :main_cql_library, type: String

    # HQMF/Tacoma-specific Measure-logic related data
    field :population_criteria, type: Hash
    field :measure_period, type: Hash
    field :measure_attributes, type: Array
    embeds_many :source_data_criteria, class_name: 'QDM::DataElement'

    embeds_many :population_sets

    # Relations to other model classes
    # Note: bundle is removed, Cypress may create their own bundle object and inject the relationship
    has_one :package, class_name: 'CQM::MeasurePackage', inverse_of: :measure, dependent: :destroy # Bonnie-specific

    # Store this references as an Array on the Measure object,
    # but don't care about the inverse relationship (e.g. we never really care
    # about getting all the measures from a ValueSet object,
    # hence the 'inverse_of: nil')
    has_and_belongs_to_many :value_sets, inverse_of: nil

    has_many :calculation_results, class_name: 'CQM::IndividualResult', inverse_of: :measure

    def all_stratifications
      population_sets.flat_map(&:stratifications)
    end

    # Returns the hqmf-parser's ruby implementation of an HQMF document.
    # Rebuild from population_criteria, data_criteria, and measure_period JSON
    def as_hqmf_model
      json = {
        'id' => hqmf_id,
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
  end
end
