module QDM
  # app/models/qdm/product_shelf_life.rb
  class ProductShelfLife < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :type
    field :period
    field :specialPrecautionsForStorage
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
