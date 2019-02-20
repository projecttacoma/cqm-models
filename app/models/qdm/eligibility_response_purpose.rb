module QDM
  # app/models/qdm/eligibility_response_purpose.rb
  class EligibilityResponsePurpose < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
