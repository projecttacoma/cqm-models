module QDM
  # app/models/qdm/messageheader_response_request.rb
  class MessageheaderResponseRequest < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
