class QDM::SubstanceOrder < QDM::Datatype
  include Mongoid::Document
  field :author_datetime, type: DateTime
  field :reason, type: QDM::Code
  field :dosage, type: QDM::Quantity
  field :supply, type: QDM::Quantity
  field :frequency, type: QDM::Code
  field :method, type: QDM::Code
  field :refills, type: Integer
  field :route, type: QDM::Code
  field :negation_rationale, type: QDM::Code
  field :hqmf_oid, type: String, default: '2.16.840.1.113883.10.20.28.3.77'
  field :category, type: String, default: 'substance'
  field :status, type: String, default: 'order'
  field :qdm_version, type: String, default: '5.3'
end
