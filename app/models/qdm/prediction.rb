module QDM
  # app/models/qdm/prediction.rb
  class Prediction < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :outcome
    field :probability
    field :qualitativeRisk
    field :relativeRisk
    field :when
    field :rationale
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
