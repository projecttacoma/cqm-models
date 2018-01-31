class QDM::SubstanceAdministered
  include Mongoid::Document
  field :author_datetime, type: DateTime
  field :relevant_period, type: QDM::Interval
  field :dosage, type: QDM::Quantity
  field :supply, type: QDM::Quantity
  field :frequency, type: QDM::Code
  field :route, type: QDM::Code
  field :negation_rationale, type: QDM::Code
  field :hqmf_oid, type: String, default: '2.16.840.1.113883.10.20.28.3.73'
  field :category, type: String, default: 'substance'
  field :qdm_version, type: String, default: '5.3'
end
