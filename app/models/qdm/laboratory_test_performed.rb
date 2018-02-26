class QDM::LaboratoryTestPerformed < QDM::DataElement
  include Mongoid::Document
  embedded_in :patient
  field :author_datetime, type: DateTime
  field :relevant_period, type: QDM::Interval
  field :status, type: QDM::Code
  field :method, type: QDM::Code
  field :result
  field :result_datetime, type: DateTime
  field :reason, type: QDM::Code
  field :reference_range, type: QDM::Interval
  field :negation_rationale, type: QDM::Code
  field :components, type: Array
  field :hqmf_oid, type: String, default: '2.16.840.1.113883.10.20.28.3.42'
  field :category, type: String, default: 'laboratory_test'
  field :status, type: String, default: 'performed'
  field :qdm_version, type: String, default: '5.3'
end
