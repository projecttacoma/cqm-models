module QDM
  # app/models/qdm/clinical_impression_status.rb
  class ClinicalImpressionStatus < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
