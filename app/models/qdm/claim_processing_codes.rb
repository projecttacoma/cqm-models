module QDM
  # app/models/qdm/claim_processing_codes.rb
  class ClaimProcessingCodes < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
