module QDM
  # app/models/qdm/patient_characteristic.rb
  class PatientCharacteristic < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :author_datetime, type: DateTime
    field :hqmf_oid, type: String, default: '2.16.840.1.113883.10.20.28.3.53'
    field :category, type: String, default: 'patient_characteristic'
    field :qdm_version, type: String, default: '5.3'
    field :class_name, type: String, default: 'PatientCharacteristic'
  end
end
