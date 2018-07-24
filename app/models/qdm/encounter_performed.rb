module QDM
  # app/models/qdm/encounter_performed.rb
  class EncounterPerformed < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :authorDatetime, type: DateTime
    field :admissionSource, type: QDM::Code
    field :relevantPeriod, type: QDM::Interval
    field :dischargeDisposition, type: QDM::Code
    field :facilityLocations, type: Array, default: []
    field :diagnoses, type: Array
    field :principalDiagnosis, type: QDM::Code
    field :negationRationale, type: QDM::Code
    field :lengthOfStay, type: QDM::Quantity
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.3.5'
    field :category, type: String, default: 'encounter'
    field :qdmStatus, type: String, default: 'performed'
    field :qdmVersion, type: String, default: '5.3'
  end
end
