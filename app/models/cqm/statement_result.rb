module CQM
  # StatementResult is used to store statement result information in IndividualResult
  class StatementResult
    include Mongoid::Document
    include Mongoid::Timestamps

    # These are the Mongoid equivalent of the Mongoose "enum" attribute for the respective fields.
    # They throw an error if you try to assign a value that's not in the array.
    validates_inclusion_of :relevance, in: %w[NA TRUE FALSE]

    # Library the clause this result is for is in
    field :library_name, type: String
    # Statment the clause this result is for is in
    field :statement_name, type: String
    # LocalId of the clause this result is for
    field :pretty, type: String
    # Final, processed result of raw calculation
    field :final, type: String
    # Raw result of clause calculation
    field :raw

    field :relevance, type: String

    # Relations to other model classes
    embedded_in :individual_result
  end
end
