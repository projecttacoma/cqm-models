module QDM
  # app/models/qdm/charge_item.rb
  class ChargeItem < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :definitionUri
    field :definitionCanonical
    field :status
    field :partOf
    field :code
    field :subject
    field :context
    field :occurrence
    field :performer
    field :performingOrganization
    field :requestingOrganization
    field :costCenter
    field :quantity
    field :bodysite
    field :factorOverride
    field :priceOverride
    field :overrideReason
    field :enterer
    field :enteredDate
    field :reason
    field :service
    field :product
    field :account
    field :note
    field :supportingInformation
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
