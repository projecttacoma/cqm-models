module QDM
  # app/models/qdm/ingredient.rb
  class Ingredient < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :quantity
    field :substance
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
