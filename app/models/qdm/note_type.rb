module QDM
  # app/models/qdm/note_type.rb
  class NoteType < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
