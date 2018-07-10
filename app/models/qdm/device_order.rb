module QDM
  # app/models/qdm/device_order.rb
  class DeviceOrder < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :authorDatetime, type: DateTime
    field :negationRationale
    field :reason
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.3.15'
    field :category, type: String, default: 'device'
    field :qdmStatus, type: String, default: 'order'
    field :qdmVersion, type: String, default: '5.3'
  end
end
