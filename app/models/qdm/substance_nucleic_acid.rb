module QDM
  # app/models/qdm/substance_nucleic_acid.rb
  class SubstanceNucleicAcid < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :sequenceType
    field :numberOfSubunits
    field :areaOfHybridisation
    field :oligoNucleotideType
    field :subunit
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
