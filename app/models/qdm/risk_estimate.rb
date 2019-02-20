module QDM
  # app/models/qdm/risk_estimate.rb
  class RiskEstimate < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :description
    field :type
    field :value
    field :unitOfMeasure
    field :denominatorCount
    field :numeratorCount
    field :precisionEstimate
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
