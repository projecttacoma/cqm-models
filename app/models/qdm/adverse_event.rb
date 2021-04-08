module QDM
  # app/models/qdm/adverse_event.rb
  class AdverseEvent < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :authorDatetime, type: DateTime
    field :relevantDatetime, type: DateTime
    field :severity, type: QDM::Code
    field :facilityLocation, type: QDM::FacilityLocation
    field :type, type: QDM::Code
    embeds_many :recorder, class_name: 'QDM::Entity'
    field :qdmTitle, type: String, default: 'Adverse Event'
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.4.120'
    field :qdmCategory, type: String, default: 'adverse_event'
    field :qdmVersion, type: String, default: '5.6'
  end
end
