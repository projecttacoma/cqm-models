module QDM
  # app/models/qdm/nutrition_order.rb
  class NutritionOrder < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :instantiatesCanonical
    field :instantiatesUri
    field :instantiates
    field :status
    field :intent
    field :patient
    field :encounter
    field :dateTime
    field :orderer
    field :allergyIntolerance
    field :foodPreferenceModifier
    field :excludeFoodModifier
    field :oralDiet
    field :supplement
    field :enteralFormula
    field :note
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
