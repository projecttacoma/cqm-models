module QDM
  # app/models/qdm/referenced_from.rb
  class ReferencedFrom < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :source
    field :sourceId
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
