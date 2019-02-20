module QDM
  # app/models/qdm/organism.rb
  class Organism < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :family
    field :genus
    field :species
    field :intraspecificType
    field :intraspecificDescription
    field :author
    field :hybrid
    field :organismGeneral
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
