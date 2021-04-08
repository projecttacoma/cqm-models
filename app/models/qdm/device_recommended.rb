module QDM
  # app/models/qdm/device_recommended.rb
  class DeviceRecommended < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :authorDatetime, type: DateTime
    field :negationRationale, type: QDM::Code
    field :reason, type: QDM::Code
    embeds_many :requester, class_name: 'QDM::Entity'
    field :qdmTitle, type: String, default: 'Device, Recommended'
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.4.16'
    field :qdmCategory, type: String, default: 'device'
    field :qdmStatus, type: String, default: 'recommended'
    field :qdmVersion, type: String, default: '5.6'
  end
end
