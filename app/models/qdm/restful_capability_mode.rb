module QDM
  # app/models/qdm/restful_capability_mode.rb
  class RestfulCapabilityMode < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
