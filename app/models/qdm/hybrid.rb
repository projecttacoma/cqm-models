module QDM
  # app/models/qdm/hybrid.rb
  class Hybrid < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :maternalOrganismId
    field :maternalOrganismName
    field :paternalOrganismId
    field :paternalOrganismName
    field :hybridType
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
