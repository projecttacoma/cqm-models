module QDM
  # IndividualResult stores the patient-level (population/clause) results for a patient/measure combination
  class IndividualResult
    include Mongoid::Document
    include Mongoid::Timestamps

    # Population Attributes
    field :STRAT, type: Integer
    field :IPP, type: Integer
    field :DENOM, type: Integer
    field :NUMER, type: Integer
    field :NUMEX, type: Integer
    field :DENEX, type: Integer
    field :DENEXCEP, type: Integer
    field :MSRPOPL, type: Integer
    field :OBSERV, type: Float
    field :MSRPOPLEX, type: Integer

    # Result Attributes
    field :clause_results, type: Hash
    field :episode_results, type: Hash
    filed :population_relevance, type: Hash
    field :statement_relevance, type: Hash
    field :statement_results, type: Hash

    # Calculation state attributes
    field :state, type: String

    # Relations to other model classes
    belongs_to :measure
    belongs_to :patient
  end
end
