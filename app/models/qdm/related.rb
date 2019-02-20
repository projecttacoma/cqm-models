module QDM
  # app/models/qdm/related.rb
  class Related < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :claim
    field :relationship
    field :reference
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
