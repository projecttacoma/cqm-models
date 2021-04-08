module QDM
  # app/models/qdm/encounter_recommended.rb
  class EncounterRecommended < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :authorDatetime, type: DateTime
    field :reason, type: QDM::Code
    field :facilityLocation, type: QDM::FacilityLocation
    field :negationRationale, type: QDM::Code
    embeds_many :requester, class_name: 'QDM::Entity'
    field :qdmTitle, type: String, default: 'Encounter, Recommended'
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.4.28'
    field :qdmCategory, type: String, default: 'encounter'
    field :qdmStatus, type: String, default: 'recommended'
    field :qdmVersion, type: String, default: '5.6'
  end
end
