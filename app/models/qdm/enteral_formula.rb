module QDM
  # app/models/qdm/enteral_formula.rb
  class EnteralFormula < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :baseFormulaType
    field :baseFormulaProductName
    field :additiveType
    field :additiveProductName
    field :caloricDensity
    field :routeofAdministration
    field :administration
    field :maxVolumeToDeliver
    field :administrationInstruction
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
