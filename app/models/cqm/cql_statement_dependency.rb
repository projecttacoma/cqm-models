module CQM
  # Statement is a given CQL Statement within a CQL Library, which has many dependencies
  class StatementDependency
    include Mongoid::Document
    embedded_in :cql_library

    field :statement_name, type: String
    embeds_many :statement_references
  end

  # StatementReference notes a CQL Library/Statement which a given Statement (in which it is embedded) relies upon. This
  # is also used for populations/stratifications/SDEs to reference their defining statement.
  class StatementReference
    include Mongoid::Document
    embedded_in :statement_dependency
    embedded_in :population_set
    embedded_in :population_map
    embedded_in :stratification

    field :library_name, type: String
    field :statement_name, type: String
    field :hqmf_id, type: String
  end
end
