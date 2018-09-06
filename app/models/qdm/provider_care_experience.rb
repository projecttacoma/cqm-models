module QDM
  # app/models/qdm/provider_care_experience.rb
  class ProviderCareExperience < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :authorDatetime, type: DateTime
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.3.70'
    field :category, type: String, default: 'care_experience'
    field :qdmVersion, type: String, default: '5.4'
  end
end
