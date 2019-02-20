module QDM
  # app/models/qdm/supplied_item.rb
  class SuppliedItem < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :quantity
    field :item
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
