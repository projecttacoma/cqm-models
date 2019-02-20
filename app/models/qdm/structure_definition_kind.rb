module QDM
  # app/models/qdm/structure_definition_kind.rb
  class StructureDefinitionKind < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
