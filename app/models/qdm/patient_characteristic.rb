module QDM
  # app/models/qdm/patient_characteristic.rb
  class PatientCharacteristic < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :authorDatetime, type: DateTime
    field :qdmTitle, type: String, default: 'Patient Characteristic'
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.4.53'
    field :qdmCategory, type: String, default: 'patient_characteristic'
    field :qdmVersion, type: String, default: '5.6'
  end
end
