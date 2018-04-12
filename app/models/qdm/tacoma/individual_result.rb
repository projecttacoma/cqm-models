module QDM
  # IndividualResult stores the patient-level (population/clause) results for a patient/measure combination
  class IndividualResult
    include Mongoid::Document
    include Mongoid::Timestamps

    # This is the Mongoid equivalent of the Mongoose "enum" attribute for :state. Throws an error if you try to assign a value that's not in this array.
    validates_inclusion_of :state, in: %w[queued running complete cancelled failed]

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
    field :statement_results, type: Hash

    # Calculation state attributes
    field :state, type: String, default: 'queued'

    # Relations to other model classes
    belongs_to :measure
    belongs_to :patient
  end
end
