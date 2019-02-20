module QDM
  # app/models/qdm/process_note.rb
  class ProcessNote < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :number
    field :type
    field :text
    field :language
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
