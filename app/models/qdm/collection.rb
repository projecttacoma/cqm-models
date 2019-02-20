module QDM
  # app/models/qdm/collection.rb
  class Collection < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :collector
    field :source
    field :collected
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
