module QDM
  # app/models/qdm/catalog_entry.rb
  class CatalogEntry < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :type
    field :orderable
    field :referencedItem
    field :additionalIdentifier
    field :classification
    field :status
    field :validityPeriod
    field :validTo
    field :lastUpdated
    field :additionalCharacteristic
    field :additionalClassification
    field :relatedEntry
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
