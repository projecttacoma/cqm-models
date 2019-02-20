module QDM
  # app/models/qdm/classification.rb
  class Classification < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :domain
    field :classification
    field :subtype
    field :source
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
