module QDM
  # Concept is an individual code within a ValueSet, including all of the associated metadata
  # such as code system, version, and display name
  class Concept
    include Mongoid::Document
    field :code, type: String
    field :code_system_name, type: String
    field :code_system_version, type: String
    field :display_name, type: String
    field :code_system, type: String
    scope :by_code_system_name, ->(cs) { where(code_system_name: cs) }
    scope :by_code_system, ->(cs) { where(code_system: cs) }
  end
end