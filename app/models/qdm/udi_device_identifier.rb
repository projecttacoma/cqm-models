module QDM
  # app/models/qdm/udi_device_identifier.rb
  class UdiDeviceIdentifier < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :deviceIdentifier
    field :issuer
    field :jurisdiction
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
