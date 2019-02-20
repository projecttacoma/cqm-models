module QDM
  # app/models/qdm/allowed_response.rb
  class AllowedResponse < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :message
    field :situation
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
