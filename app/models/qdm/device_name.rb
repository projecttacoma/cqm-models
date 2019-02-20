module QDM
  # app/models/qdm/device_name.rb
  class DeviceName < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :name
    field :type
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
