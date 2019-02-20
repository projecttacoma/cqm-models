module QDM
  # app/models/qdm/search.rb
  class Search < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :mode
    field :score
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
