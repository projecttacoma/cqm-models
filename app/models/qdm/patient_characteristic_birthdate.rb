module QDM
  # app/models/qdm/patient_characteristic_birthdate.rb
  class PatientCharacteristicBirthdate < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :birthDatetime, type: DateTime
    field :qdmTitle, type: String, default: 'Patient Characteristic Birthdate'
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.4.54'
    field :qdmCategory, type: String, default: 'patient_characteristic'
    field :qdmStatus, type: String, default: 'birthdate'
    field :qdmVersion, type: String, default: '5.6'
  end
end
