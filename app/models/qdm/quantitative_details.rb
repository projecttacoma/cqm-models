module QDM
  # app/models/qdm/quantitative_details.rb
  class QuantitativeDetails < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :customaryUnit
    field :unit
    field :conversionFactor
    field :decimalPrecision
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
