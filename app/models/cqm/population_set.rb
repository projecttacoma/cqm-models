module CQM
  # Representation of a population set (aka. PopulationCriteria)
  class PopulationSet
    include Mongoid::Document

    embedded_in :measure

    embeds_one :populations, class_name: 'CQM::PopulationMap'
    embeds_many :stratifications
    embeds_many :supplemental_data_elements, class_name: 'CQM::StatementReference'
    embeds_many :observations

    field :title, type: String
    field :population_set_id, type: String
  end

  # Stratification info
  class Stratification
    include Mongoid::Document

    embedded_in :population_set

    field :title, type: String
    field :stratification_id, type: String
    field :hqmf_id, type: String
    embeds_one :statement, class_name: 'CQM::StatementReference'
  end

  # Observation info
  class Observation
    include Mongoid::Document

    embedded_in :population_set

    embeds_one :observation_function, class_name: 'CQM::StatementReference'
    embeds_one :observation_parameter, class_name: 'CQM::StatementReference'
    field :aggregation_type, type: String
    field :hqmf_id, type: String
  end

  # Base class for the population maps
  class PopulationMap
    include Mongoid::Document

    embedded_in :population_set
  end

  # The population map for a porportion population set
  class ProportionPopulationMap < PopulationMap
    include Mongoid::Document

    embeds_one :IPP, class_name: 'CQM::StatementReference'
    embeds_one :DENOM, class_name: 'CQM::StatementReference'
    embeds_one :NUMER, class_name: 'CQM::StatementReference'
    embeds_one :NUMEX, class_name: 'CQM::StatementReference'
    embeds_one :DENEX, class_name: 'CQM::StatementReference'
    embeds_one :DENEXCEP, class_name: 'CQM::StatementReference'
  end

  # The population map for a ratio population set
  class RatioPopulationMap < PopulationMap
    include Mongoid::Document

    embeds_one :IPP, class_name: 'CQM::StatementReference'
    embeds_one :DENOM, class_name: 'CQM::StatementReference'
    embeds_one :NUMER, class_name: 'CQM::StatementReference'
    embeds_one :NUMEX, class_name: 'CQM::StatementReference'
    embeds_one :DENEX, class_name: 'CQM::StatementReference'
  end

  # The population map for a continuous variable population set
  class ContinuousVariablePopulationMap < PopulationMap
    include Mongoid::Document

    embeds_one :IPP, class_name: 'CQM::StatementReference'
    embeds_one :MSRPOPL, class_name: 'CQM::StatementReference'
    embeds_one :MSRPOPLEX, class_name: 'CQM::StatementReference'
  end

  # The population map for a cohort population set
  class CohortPopulationMap < PopulationMap
    include Mongoid::Document

    embeds_one :IPP, class_name: 'CQM::StatementReference'
  end
end
