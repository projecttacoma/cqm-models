module QDM
  # app/models/qdm/provenance_entity_role.rb
  class ProvenanceEntityRole < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
