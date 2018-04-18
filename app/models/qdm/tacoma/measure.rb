module QDM
  # Measure contains the information necessary to represent the CQL version of a Clinical Quality Measure,
  # As needed by the Bonnie & Cypress applications
  class Measure
    include Mongoid::Document
    include Mongoid::Timestamps

    DEFAULT_EFFECTIVE_DATE = Time.gm(2012, 12, 31, 23, 59).to_i
    MP_START_DATE = Time.gm(2012, 1, 1, 0, 0).to_i
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

    # ID/other measure information
    field :id, type: String
    field :measure_id, type: String
    field :hqmf_id, type: String
    field :hqmf_set_id, type: String
    field :hqmf_version_number, type: Integer
    field :cms_id, type: String
    field :title, type: String, default: ''
    field :description, type: String, default: ''
    field :type, type: String
    field :category, type: String, default: 'uncategorized'

    # Measure type variables
    field :episode_of_care, type: Boolean
    field :continuous_variable, type: Boolean
    field :episode_ids, type: Array

    # Publishing data (used by Bonnie)
    field :published, type: Boolean
    field :publish_date, type: Date
    field :version, type: Integer

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
    field :population_ids, type: Hash

    field :value_set_oids, type: Array, default: []
    field :value_set_oid_version_objects, type: Array, default: []

    field :complexity, type: Hash

    # Relations to other model classes
    belongs_to :user
    belongs_to :bundle, class_name: 'HealthDataStandards::CQM::Bundle'
    has_and_belongs_to_many :records, inverse_of: nil
    has_one :package, class_name: 'CqlMeasurePackage', inverse_of: :measure, dependent: :destroy

    scope :by_measure_id, ->(id) { where('measure_id' => id) }
    scope :by_type, ->(type) { where('type' => type) }
    scope :by_user, ->(user) { where user_id: user.id }

    index 'user_id' => 1
    # Find the measures matching a patient
    def self.for_patient(record)
      where user_id: record.user_id, hqmf_set_id: { '$in' => record.measure_ids }
    end

    def value_sets
      options = { oid: value_set_oids }
      options[:user_id] = user.id if user?
      @value_sets ||= HealthDataStandards::SVS::ValueSet.in(options)
      @value_sets
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

    # When saving calculate the cyclomatic complexity of the measure
    # TODO: Do we want to consider a measure other than "cyclomatic complexity" for CQL?
    # TODO: THIS IS NOT CYCLOMATIC COMPLEXITY, ALL MULTIPLE ELEMENT EXPRESSIONS GET COUNTED AS HIGHER COMPLEXITY, NOT JUST LOGICAL
    before_save :calculate_complexity
    def calculate_complexity
      # We calculate the complexity for each statement, and (at least for now) store the result in the same way
      # we store the complexity for QDM variables
      # TODO: consider whether this is too much of a force fit
      self.complexity = { variables: [] }
      # Recursively look through an expression to count the logical branches
      def count_expression_logical_branches(expression)
        case expression
        when nil
          0
        when Array
          expression.map { |exp| count_expression_logical_branches(exp) }.sum
        when Hash
          case expression['type']
          when 'And', 'Or', 'Not'
            count_expression_logical_branches(expression['operand'])
          when 'Query'
            # TODO: Do we need to look into the source side of the query? Can there be logical operators there?
            count_expression_logical_branches(expression['where']) + count_expression_logical_branches(expression['relationship'])
          else
            1
          end
        else
          0
        end
      end

      # Determine the complexity of each statement
      elm.each do |elm|
        next unless (statements = elm.try(:[], 'library').try(:[], 'statements').try(:[], 'def'))
        statements.each do |statement|
          complexity[:variables] << { name: statement['name'], complexity: count_expression_logical_branches(statement['expression']) }
        end
      end
      complexity
    end
  end
end
