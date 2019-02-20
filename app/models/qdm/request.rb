module QDM
  # app/models/qdm/request.rb
  class Request < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :method
    field :url
    field :ifNoneMatch
    field :ifModifiedSince
    field :ifMatch
    field :ifNoneExist
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
