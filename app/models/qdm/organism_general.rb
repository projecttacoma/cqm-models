module QDM
  # app/models/qdm/organism_general.rb
  class OrganismGeneral < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :kingdom
    field :phylum
    field :class
    field :order
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
