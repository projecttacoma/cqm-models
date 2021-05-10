module QDM
  # app/models/qdm/patient_characteristic_ethnicity.rb
  class PatientCharacteristicEthnicity < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :qdmTitle, type: String, default: 'Patient Characteristic Ethnicity'
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.4.56'
    field :qdmCategory, type: String, default: 'patient_characteristic'
    field :qdmStatus, type: String, default: 'ethnicity'
    field :qdmVersion, type: String, default: '5.6'
  end
end
