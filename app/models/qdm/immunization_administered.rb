class QDM::ImmunizationAdministered
  include Mongoid::Document
  field :author_datetime, type: DateTime
  field :reason, type: QDM::Code
  field :dosage, type: QDM::Quantity
  field :supply, type: QDM::Quantity
  field :route, type: QDM::Code
  field :negation_rationale, type: QDM::Code
  field :hqmf_oid, type: String, default: '2.16.840.1.113883.10.20.28.3.112'
  field :category, type: String, default: 'immunization'
  field :qdm_version, type: String, default: '5.3'
end
