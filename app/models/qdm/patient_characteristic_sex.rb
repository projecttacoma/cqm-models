module QDM
  # app/models/qdm/patient_characteristic_sex.rb
  class PatientCharacteristicSex < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :qdmVersion, type: String, default: '5.3'
  end
end
