module QDM
  # app/models/qdm/patient_characteristic_race.rb
  class PatientCharacteristicRace < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :qdmTitle, type: String, default: 'Patient Characteristic Race'
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.4.59'
    field :qdmCategory, type: String, default: 'patient_characteristic'
    field :qdmStatus, type: String, default: 'race'
    field :qdmVersion, type: String, default: '5.6'
  end
end
