module QDM
  # app/models/qdm/patient_characteristic_sex.rb
  class PatientCharacteristicSex < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :qdm_version, type: String, default: '5.3'
    field :class_name, type: String, default: 'PatientCharacteristicSex'
  end
end
