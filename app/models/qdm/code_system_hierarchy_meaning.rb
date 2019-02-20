module QDM
  # app/models/qdm/code_system_hierarchy_meaning.rb
  class CodeSystemHierarchyMeaning < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
