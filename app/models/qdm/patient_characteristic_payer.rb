module QDM
  # app/models/qdm/patient_characteristic_payer.rb
  class PatientCharacteristicPayer < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :relevantPeriod, type: QDM::Interval
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.3.58'
    field :category, type: String, default: 'patient_characteristic'
    field :qdmStatus, type: String, default: 'payer'
    field :qdmVersion, type: String, default: '5.3'
  end
end
