module QDM
  # app/models/qdm/request_header.rb
  class RequestHeader < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :field
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
