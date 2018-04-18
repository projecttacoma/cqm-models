module QDM
  # app/models/qdm/patient_characteristic_sex.rb
  class PatientCharacteristicSex < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.3.55'
    field :category, type: String, default: 'patient_characteristic'
    field :qdmStatus, type: String, default: 'gender'
    field :qdmVersion, type: String, default: '5.3'
  end
end
