class QDM::FamilyHistory < QDM::DataElement
  include Mongoid::Document
  embedded_in :patient
  field :author_datetime, type: DateTime
  field :relationship, type: QDM::Code
  field :hqmf_oid, type: String, default: '2.16.840.1.113883.10.20.28.3.111'
  field :qrda_oid, type: String, default: '2.16.840.1.113883.10.20.24.3.12'
  field :category, type: String, default: 'family_history'
  field :qdm_version, type: String, default: '5.3'
end
