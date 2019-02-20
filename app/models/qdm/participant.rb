module QDM
  # app/models/qdm/participant.rb
  class Participant < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :type
    field :uri
    field :display
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
