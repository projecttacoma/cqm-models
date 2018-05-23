module CQM
  # CQLStatementDependency is a nested object that replaces a messy embedded Hash structure
  # that used to exist in the Measure object.
  class CQLStatementDependency
    include Mongoid::Document
    embedded_in :measure

    field :library_name, type: String
    embeds_many :statements
  end

  # Statement is a given CQL Statement within a CQL Library, which has many dependencies
  class Statement
    include Mongoid::Document
    embedded_in :cql_statement_dependency

    field :statement_name, type: String
    embeds_many :dependencies
  end

  # Dependency notes a CQL Library/Statement which a given Statement (in which it is embedded) relies upon
  class Dependency
    include Mongoid::Document
    embedded_in :statement

    field :library_name, type: String
    field :statement_name, type: String
  end
end
