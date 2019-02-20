module QDM
  # app/models/qdm/narrative.rb
  class Narrative < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :status
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
