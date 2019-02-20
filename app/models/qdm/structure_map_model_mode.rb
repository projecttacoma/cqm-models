module QDM
  # app/models/qdm/structure_map_model_mode.rb
  class StructureMapModelMode < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
