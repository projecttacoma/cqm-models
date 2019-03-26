module QDM
  # app/models/qdm/adverse_event.rb
  class AdverseEvent < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :authorDatetime, type: DateTime
    field :relevantPeriod, type: QDM::Interval
    field :severity, type: QDM::Code
    field :facilityLocation, type: QDM::FacilityLocation
    field :type, type: QDM::Code
    field :qdmTitle, type: String, default: 'Adverse Event'
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.4.120'
    field :qdmCategory, type: String, default: 'adverse_event'
    field :hqmfTitle, type: String, default: 'Adverse Event'
    field :qdmVersion, type: String, default: '5.4'
  end
end
