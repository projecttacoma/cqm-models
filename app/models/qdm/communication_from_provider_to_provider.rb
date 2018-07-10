module QDM
  # app/models/qdm/communication_from_provider_to_provider.rb
  class CommunicationFromProviderToProvider < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :authorDatetime, type: DateTime
    field :relatedTo, type: Array
    field :negationRationale
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.3.10'
    field :category, type: String, default: 'communication'
    field :qdmStatus, type: String, default: 'from_provider_to_provider'
    field :qdmVersion, type: String, default: '5.3'
  end
end
