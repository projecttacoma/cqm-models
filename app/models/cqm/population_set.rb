module CQM
  class PopulationSet
    include Mongoid::Document

    embedded_in :measure

    embeds_one :populations, class_name: "CQM::PopulationMap"
    embeds_many :stratifications
    embeds_many :supplemental_data_elements, class_name: "CQM::StatementReference"
    embeds_many :observations

    field :title, type: String
    field :id, type: String
  end

  class Stratification
    include Mongoid::Document

    embedded_in :population_set

    field :title, type: String
    field :id, type: String
    embeds_one :statement, class_name: "CQM::StatementReference"
  end
  
  class Observation
    include Mongoid::Document

    embedded_in :population_set
    
    embeds_one :observation_function, class_name: "CQM::StatementReference"
    field :aggregation_type, type: String
  end

  class PopulationMap
    include Mongoid::Document

    embedded_in :population_set
  end
  
  class ProportionPopulationMap < PopulationMap
    include Mongoid::Document

    embeds_one :IPP, class_name: "CQM::StatementReference"
    embeds_one :DENOM, class_name: "CQM::StatementReference"
    embeds_one :NUMER, class_name: "CQM::StatementReference"
    embeds_one :NUMEX, class_name: "CQM::StatementReference"
    embeds_one :DENEX, class_name: "CQM::StatementReference"
    embeds_one :DENEXCEP, class_name: "CQM::StatementReference"
  end
  
  class RatioPopulationMap < PopulationMap
    include Mongoid::Document

    embeds_one :IPP, class_name: "CQM::StatementReference"
    embeds_one :DENOM, class_name: "CQM::StatementReference"
    embeds_one :NUMER, class_name: "CQM::StatementReference"
    embeds_one :NUMEX, class_name: "CQM::StatementReference"
    embeds_one :DENEX, class_name: "CQM::StatementReference"
  end
  
  class ContinuousVariablePopulationMap < PopulationMap
    include Mongoid::Document

    embeds_one :IPP, class_name: "CQM::StatementReference"
    embeds_one :MSRPOPL, class_name: "CQM::StatementReference"
    embeds_one :MSRPOPLEX, class_name: "CQM::StatementReference"
  end
  
  class CohortPopulationMap < PopulationMap
    include Mongoid::Document

    embeds_one :IPP, class_name: "CQM::StatementReference"
  end
end
