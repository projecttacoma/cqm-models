module QDM
  # app/models/qdm/medicinal_product_manufactured.rb
  class MedicinalProductManufactured < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :manufacturedDoseForm
    field :unitOfPresentation
    field :quantity
    field :manufacturer
    field :ingredient
    field :physicalCharacteristics
    field :otherCharacteristics
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
