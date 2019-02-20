module QDM
  # app/models/qdm/strength.rb
  class Strength < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :presentation
    field :presentationLowLimit
    field :concentration
    field :concentrationLowLimit
    field :measurementPoint
    field :country
    field :referenceStrength
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
