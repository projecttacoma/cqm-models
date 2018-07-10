module QDM
  # app/models/qdm/adverse_event.rb
  class AdverseEvent < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :authorDatetime, type: DateTime
    field :relevantPeriod, type: QDM::Interval
    field :severity, type: Mixed
    field :facilityLocation, type: Mixed
    field :type, type: Mixed
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.3.120'
    field :category, type: String, default: 'adverse_event'
    field :qdmVersion, type: String, default: '5.3'
  end
end
