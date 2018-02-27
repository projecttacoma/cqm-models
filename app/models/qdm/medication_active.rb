class QDM::MedicationActive < QDM::DataElement
  include Mongoid::Document
  embedded_in :patient
  field :relevant_period, type: QDM::Interval
  field :dosage, type: QDM::Quantity
  field :supply, type: QDM::Quantity
  field :frequency, type: QDM::Code
  field :route, type: QDM::Code
  field :hqmf_oid, type: String, default: '2.16.840.1.113883.10.20.28.3.44'
  field :category, type: String, default: 'medication'
  field :status, type: String, default: 'active'
  field :qdm_version, type: String, default: '5.3'
end