module QDM
  # app/models/qdm/communication_from_provider_to_provider.rb
  class CommunicationFromProviderToProvider < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :author_datetime, type: DateTime
    field :related_to, type: Array
    field :negation_rationale, type: QDM::Code
    field :hqmf_oid, type: String, default: '2.16.840.1.113883.10.20.28.3.10'
    field :category, type: String, default: 'communication'
    field :qdm_status, type: String, default: 'from_provider_to_provider'
    field :qdm_version, type: String, default: '5.3'
    field :class_name, type: String, default: 'CommunicationFromProviderToProvider'
  end
end
