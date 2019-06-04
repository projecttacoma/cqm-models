module CQM
  # ClauseResult is used to store clause result information in IndividualResult
  class ClauseResult
    include Mongoid::Document
    include Mongoid::Timestamps

    # Library the clause this result is for is in
    field :library_name, type: String
    # Statment the clause this result is for is in
    field :statement_name, type: String
    # LocalId of the clause this result is for
    field :localId, type: String
    # Final, processed result of raw calculation
    field :final, type: String
    # Raw result of clause calculation
    field :raw

    # Relations to other model classes
    embedded_in :individual_result
  end
end
