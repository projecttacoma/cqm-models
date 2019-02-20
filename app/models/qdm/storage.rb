module QDM
  # app/models/qdm/storage.rb
  class Storage < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :description
    field :temperature
    field :scale
    field :duration
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
