class QDM::PatientCharacteristicExpired < QDM::Datatype
  include Mongoid::Document
  field :expired_datetime, type: DateTime
  field :cause, type: QDM::Code
  field :hqmf_oid, type: String, default: '2.16.840.1.113883.10.20.28.3.57'
  field :category, type: String, default: 'condition'
  field :qdm_version, type: String, default: '5.3'
end
