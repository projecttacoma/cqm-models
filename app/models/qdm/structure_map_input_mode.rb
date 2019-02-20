module QDM
  # app/models/qdm/structure_map_input_mode.rb
  class StructureMapInputMode < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
