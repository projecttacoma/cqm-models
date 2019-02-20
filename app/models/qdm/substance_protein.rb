module QDM
  # app/models/qdm/substance_protein.rb
  class SubstanceProtein < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :sequenceType
    field :numberOfSubunits
    field :disulfideLinkage
    field :subunit
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
