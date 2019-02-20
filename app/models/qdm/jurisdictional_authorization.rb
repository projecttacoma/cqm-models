module QDM
  # app/models/qdm/jurisdictional_authorization.rb
  class JurisdictionalAuthorization < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :country
    field :jurisdiction
    field :legalStatusOfSupply
    field :validityPeriod
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
