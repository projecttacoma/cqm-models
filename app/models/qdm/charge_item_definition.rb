module QDM
  # app/models/qdm/charge_item_definition.rb
  class ChargeItemDefinition < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :url
    field :identifier
    field :version
    field :title
    field :derivedFromUri
    field :partOf
    field :replaces
    field :status
    field :experimental
    field :date
    field :publisher
    field :contact
    field :description
    field :useContext
    field :jurisdiction
    field :copyright
    field :approvalDate
    field :lastReviewDate
    field :effectivePeriod
    field :code
    field :instance
    field :applicability
    field :propertyGroup
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
