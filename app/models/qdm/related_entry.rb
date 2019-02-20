module QDM
  # app/models/qdm/related_entry.rb
  class RelatedEntry < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :relationtype
    field :item
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
