module QDM
  # app/models/qdm/encounter_performed.rb
  class EncounterPerformed < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :authorDatetime, type: DateTime
    field :admissionSource, type: QDM::Code
    field :clazz, type: QDM::Code
    field :relevantPeriod, type: QDM::Interval
    field :dischargeDisposition, type: QDM::Code
    field :facilityLocations, type: Array, default: []
    field :diagnoses, type: Array
    field :lengthOfStay, type: QDM::Quantity
    field :priority, type: QDM::Code
    embeds_many :participant, class_name: 'QDM::Entity'
    field :relatedTo, type: Array
    field :qdmTitle, type: String, default: 'Encounter, Performed'
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.4.5'
    field :qdmCategory, type: String, default: 'encounter'
    field :qdmStatus, type: String, default: 'performed'
    field :qdmVersion, type: String, default: '5.6'
  end
end
