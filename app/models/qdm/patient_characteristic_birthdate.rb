class QDM::PatientCharacteristicBirthdate < QDM::DataElement
  include Mongoid::Document
  embedded_in :patient
  field :birth_datetime, type: DateTime
  field :hqmf_oid, type: String, default: '2.16.840.1.113883.10.20.28.3.54'
  field :category, type: String, default: 'patient_characteristic'
  field :status, type: String, default: 'birthdate'
  field :qdm_version, type: String, default: '5.3'
end
