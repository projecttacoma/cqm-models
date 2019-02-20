module QDM
  # app/models/qdm/consent.rb
  class Consent < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :status
    field :scope
    field :category
    field :patient
    field :dateTime
    field :performer
    field :organization
    field :source
    field :policy
    field :policyRule
    field :verification
    field :provision
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
