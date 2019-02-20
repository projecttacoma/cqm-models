module QDM
  # app/models/qdm/concept_map_group_unmapped_mode.rb
  class ConceptMapGroupUnmappedMode < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
