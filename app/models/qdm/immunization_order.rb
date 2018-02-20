class QDM::ImmunizationOrder < QDM::Datatype
  include Mongoid::Document
  field :active_datetime, type: DateTime
  field :author_datetime, type: DateTime
  field :dosage, type: QDM::Quantity
  field :supply, type: QDM::Quantity
  field :reason, type: QDM::Code
  field :route, type: QDM::Code
  field :negation_rationale, type: QDM::Code
  field :hqmf_oid, type: String, default: '2.16.840.1.113883.10.20.28.3.113'
  field :category, type: String, default: 'immunization'
  field :status, type: String, default: 'order'
  field :qdm_version, type: String, default: '5.3'
end
