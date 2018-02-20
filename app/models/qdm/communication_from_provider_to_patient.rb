class QDM::CommunicationFromProviderToPatient < QDM::Datatype
  include Mongoid::Document
  field :author_datetime, type: DateTime
  field :related_to, type: Array
  field :negation_rationale, type: QDM::Code
  field :hqmf_oid, type: String, default: '2.16.840.1.113883.10.20.28.3.9'
  field :category, type: String, default: 'communication'
  field :status, type: String, default: 'from_provider_to_patient'
  field :qdm_version, type: String, default: '5.3'
end
