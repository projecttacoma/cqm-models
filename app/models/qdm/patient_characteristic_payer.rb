class QDM::PatientCharacteristicPayer < QDM::DataElement
  include Mongoid::Document
  embedded_in :patient
  field :relevant_period, type: QDM::Interval
  field :hqmf_oid, type: String, default: '2.16.840.1.113883.10.20.28.3.58'
  field :category, type: String, default: 'patient_characteristic'
  field :status, type: String, default: 'payer'
  field :qdm_version, type: String, default: '5.3'
end
