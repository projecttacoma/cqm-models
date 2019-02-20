module QDM
  # app/models/qdm/search_comparator.rb
  class SearchComparator < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
