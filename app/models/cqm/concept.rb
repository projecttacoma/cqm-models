module CQM
  # Concept is an individual code within a ValueSet, including all of the associated metadata
  # such as code system, version, and display name
  class Concept
    include Mongoid::Document
    field :code, type: String
    field :code_system_oid, type: String
    field :code_system_name, type: String
    field :code_system_version, type: String
    field :display_name, type: String

    embedded_in :value_set
  end
end
