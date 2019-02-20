module QDM
  # app/models/qdm/endpoint_status.rb
  class EndpointStatus < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
