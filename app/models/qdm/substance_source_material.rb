module QDM
  # app/models/qdm/substance_source_material.rb
  class SubstanceSourceMaterial < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :sourceMaterialClass
    field :sourceMaterialType
    field :sourceMaterialState
    field :organismId
    field :organismName
    field :parentSubstanceId
    field :parentSubstanceName
    field :countryOfOrigin
    field :geographicalLocation
    field :developmentStage
    field :fractionDescription
    field :organism
    field :partDescription
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
