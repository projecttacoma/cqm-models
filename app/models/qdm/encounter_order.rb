module QDM
  # app/models/qdm/encounter_order.rb
  class EncounterOrder < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :authorDatetime, type: DateTime
    field :reason, type: QDM::Code
    field :facilityLocation, type: QDM::Code
    field :negationRationale, type: QDM::Code
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.3.27'
    field :category, type: String, default: 'encounter'
    field :qdmStatus, type: String, default: 'order'
    field :qdmVersion, type: String, default: '5.3'
  end
end
