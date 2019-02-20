module QDM
  # app/models/qdm/guidance_response_status.rb
  class GuidanceResponseStatus < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
