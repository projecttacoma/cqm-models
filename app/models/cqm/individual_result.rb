module CQM
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
    field :clause_results, type: Array
    field :statement_results, type: Array
    field :episode_results, type: Hash

    # This field is for application specific information only. If both Bonnie and
    # Cypress use a common field, it should be made a field on this model,
    # and not put into extendedData.
    field :extendedData, type: Hash

    # Calculation state attributes
    field :state, type: String, default: 'queued'

    # Relations to other model classes
    belongs_to :measure
    belongs_to :patient

    # Convert the stored array into a hash between clause and result
    def clause_results_by_clause
      clause_results_hash = {}
      clause_results.each do |result|
        if(!clause_results_hash[result['libraryName']])
          clause_results_hash[result['libraryName']] = {}
        end
        clause_results_hash[result['libraryName']][result['localId']] = result
      end
      return clause_results_hash
    end
    
    def statement_results_by_statement
      statement_results_hash = {}
      statement_results.each do |result|
        if(!statement_results_hash[result['libraryName']])
          statement_results_hash[result['libraryName']] = {}
        end
        statement_results_hash[result['libraryName']][result['statementName']] = result
      end
      return statement_results_hash
    end
  end
end
