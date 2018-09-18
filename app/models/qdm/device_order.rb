module QDM
  # app/models/qdm/device_order.rb
  class DeviceOrder < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :authorDatetime, type: DateTime
    field :negationRationale, type: QDM::Code
    field :reason, type: QDM::Code
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.3.15'
    field :qdmVersion, type: String, default: '5.4'
  end
end
