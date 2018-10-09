module QDM
  # app/models/qdm/patient_characteristic_race.rb
  class PatientCharacteristicRace < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.3.59'
    field :qdmCategory, type: String, default: 'patient_characteristic'
    field :qdmStatus, type: String, default: 'race'
    field :qdmVersion, type: String, default: '5.4'
  end
end
