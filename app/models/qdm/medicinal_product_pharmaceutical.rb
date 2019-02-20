module QDM
  # app/models/qdm/medicinal_product_pharmaceutical.rb
  class MedicinalProductPharmaceutical < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :administrableDoseForm
    field :unitOfPresentation
    field :ingredient
    field :device
    field :characteristics
    field :routeOfAdministration
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
