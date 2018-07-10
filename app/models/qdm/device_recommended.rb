module QDM
  # app/models/qdm/device_recommended.rb
  class DeviceRecommended < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :authorDatetime, type: DateTime
    field :negationRationale
    field :reason
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.3.16'
    field :category, type: String, default: 'device'
    field :qdmStatus, type: String, default: 'recommended'
    field :qdmVersion, type: String, default: '5.3'
  end
end
