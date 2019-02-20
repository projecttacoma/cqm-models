module QDM
  # app/models/qdm/structure_map_context_type.rb
  class StructureMapContextType < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
