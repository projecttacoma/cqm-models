module QDM
  # app/models/qdm/results_by_exposure.rb
  class ResultsByExposure < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :description
    field :exposureState
    field :variantState
    field :riskEvidenceSynthesis
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
