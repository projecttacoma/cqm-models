module QDM
  # app/models/qdm/effect_estimate.rb
  class EffectEstimate < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :description
    field :type
    field :variantState
    field :value
    field :unitOfMeasure
    field :precisionEstimate
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
