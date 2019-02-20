module QDM
  # app/models/qdm/channel.rb
  class Channel < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :type
    field :endpoint
    field :payload
    field :header
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
