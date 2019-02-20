module QDM
  # app/models/qdm/v_confidentiality_classification.rb
  class VConfidentialityClassification < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
