module QDM
  # app/models/qdm/catalog_entry_relation_type.rb
  class CatalogEntryRelationType < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
