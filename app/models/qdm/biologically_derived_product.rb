module QDM
  # app/models/qdm/biologically_derived_product.rb
  class BiologicallyDerivedProduct < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :productCategory
    field :productQDM::Code
    field :status
    field :request
    field :quantity
    field :parent
    field :collection
    field :processing
    field :manipulation
    field :storage
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
