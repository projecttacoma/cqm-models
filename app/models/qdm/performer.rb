module QDM
  # app/models/qdm/performer.rb
  class Performer < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :function
    field :actor
    field :onBehalfOf
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
