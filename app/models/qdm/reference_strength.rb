module QDM
  # app/models/qdm/reference_strength.rb
  class ReferenceStrength < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :substance
    field :strength
    field :strengthLowLimit
    field :measurementPoint
    field :country
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
