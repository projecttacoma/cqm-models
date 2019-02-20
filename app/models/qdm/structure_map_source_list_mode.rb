module QDM
  # app/models/qdm/structure_map_source_list_mode.rb
  class StructureMapSourceListMode < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
