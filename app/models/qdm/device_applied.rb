module QDM
  # app/models/qdm/device_applied.rb
  class DeviceApplied < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :authorDatetime, type: DateTime
    field :relevantPeriod, type: QDM::Interval
    field :negationRationale
    field :reason
    field :anatomicalLocationSite
    field :anatomicalApproachSite
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.3.13'
    field :category, type: String, default: 'device'
    field :qdmStatus, type: String, default: 'applied'
    field :qdmVersion, type: String, default: '5.3'
  end
end
