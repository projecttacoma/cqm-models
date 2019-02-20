module QDM
  # app/models/qdm/suspect_entity.rb
  class SuspectEntity < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :instance
    field :causality
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
