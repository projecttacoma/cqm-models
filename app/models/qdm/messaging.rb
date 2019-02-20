module QDM
  # app/models/qdm/messaging.rb
  class Messaging < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :endpoint
    field :reliableCache
    field :documentation
    field :supportedMessage
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
