module QDM
  # app/models/qdm/device_name_type.rb
  class DeviceNameType < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
