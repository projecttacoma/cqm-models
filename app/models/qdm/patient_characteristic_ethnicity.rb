class QDM::PatientCharacteristicEthnicity
  include Mongoid::Document
  field :hqmf_oid, type: String, default: '2.16.840.1.113883.10.20.28.3.56'
  field :category, type: String, default: 'patient_characteristic'
  field :qdm_version, type: String, default: '5.3'
end
