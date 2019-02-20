module QDM
  # app/models/qdm/supported_message.rb
  class SupportedMessage < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :mode
    field :definition
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
