module QDM
  # app/models/qdm/entry.rb
  class Entry < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :link
    field :fullUrl
    field :resource
    field :search
    field :request
    field :response
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
