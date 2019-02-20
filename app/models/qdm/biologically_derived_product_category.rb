module QDM
  # app/models/qdm/biologically_derived_product_category.rb
  class BiologicallyDerivedProductCategory < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
