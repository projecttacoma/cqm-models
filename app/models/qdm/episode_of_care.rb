module QDM
  # app/models/qdm/episode_of_care.rb
  class EpisodeOfCare < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :status
    field :statusHistory
    field :type
    field :diagnosis
    field :patient
    field :managingOrganization
    field :period
    field :referralRequest
    field :careManager
    field :team
    field :account
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
