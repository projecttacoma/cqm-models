module QDM
  # app/models/qdm/organization_affiliation.rb
  class OrganizationAffiliation < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :active
    field :period
    field :organization
    field :participatingOrganization
    field :network
    field :code
    field :specialty
    field :location
    field :healthcareService
    field :telecom
    field :endpoint
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
