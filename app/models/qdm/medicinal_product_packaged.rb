module QDM
  # app/models/qdm/medicinal_product_packaged.rb
  class MedicinalProductPackaged < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :subject
    field :description
    field :legalStatusOfSupply
    field :marketingStatus
    field :marketingAuthorization
    field :manufacturer
    field :batchIdentifier
    field :packageItem
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
