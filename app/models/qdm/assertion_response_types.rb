module QDM
  # app/models/qdm/assertion_response_types.rb
  class AssertionResponseTypes < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
