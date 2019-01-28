module CQM
  # CQLLibrary encapsulates what used to be a Hash in Ruby, by explicitly specifying
  # a library ID, and the CQL string for that library
  class CQLLibrary
    include Mongoid::Document
    embedded_in :measure

    field :library_name, type: String
    field :library_version, type: String
    field :cql, type: String
    field :elm, type: Hash
    field :elm_annotations, type: Hash
    field :is_main_library, type: Boolean, default: false

    embeds_many :statement_dependencies, class_name: 'CQM::StatementDependency'
  end
end
