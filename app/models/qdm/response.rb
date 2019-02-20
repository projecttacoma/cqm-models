module QDM
  # app/models/qdm/response.rb
  class Response < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :status
    field :location
    field :etag
    field :lastModified
    field :outcome
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
