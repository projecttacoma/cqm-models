module QDM
  # app/models/qdm/message_header.rb
  class MessageHeader < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :event
    field :destination
    field :sender
    field :enterer
    field :author
    field :source
    field :responsible
    field :reason
    field :response
    field :focus
    field :definition
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
