module QDM
  # app/models/qdm/request_resource_type.rb
  class RequestResourceType < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
