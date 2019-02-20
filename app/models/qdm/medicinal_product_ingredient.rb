module QDM
  # app/models/qdm/medicinal_product_ingredient.rb
  class MedicinalProductIngredient < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :role
    field :allergenicIndicator
    field :manufacturer
    field :specifiedSubstance
    field :substance
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
