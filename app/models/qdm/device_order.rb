module QDM
  # app/models/qdm/device_order.rb
  class DeviceOrder < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :authorDatetime, type: DateTime
    field :negationRationale, type: QDM::Code
    field :reason, type: QDM::Code
    embeds_many :requester, class_name: 'QDM::Entity'
    field :qdmTitle, type: String, default: 'Device, Order'
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.4.15'
    field :qdmCategory, type: String, default: 'device'
    field :qdmStatus, type: String, default: 'order'
    field :qdmVersion, type: String, default: '5.6'
  end
end
