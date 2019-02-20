module QDM
  # app/models/qdm/search_entry_mode.rb
  class SearchEntryMode < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
