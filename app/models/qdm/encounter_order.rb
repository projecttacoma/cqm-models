module QDM
  # app/models/qdm/encounter_order.rb
  class EncounterOrder < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :authorDatetime, type: DateTime
    field :reason, type: QDM::Code
    field :facilityLocation, type: QDM::FacilityLocation
    field :negationRationale, type: QDM::Code
    field :qdmTitle, type: String, default: 'Encounter, Order'
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.4.27'
    field :qdmCategory, type: String, default: 'encounter'
    field :qdmStatus, type: String, default: 'order'
    field :hqmfTitle, type: String, default: 'Encounter, Order'
    field :qdmVersion, type: String, default: '5.4'
  end
end
