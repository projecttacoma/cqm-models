module QDM
  # app/models/qdm/nutrient.rb
  class Nutrient < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :modifier
    field :amount
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
