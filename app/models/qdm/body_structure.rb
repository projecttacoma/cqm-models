module QDM
  # app/models/qdm/body_structure.rb
  class BodyStructure < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :active
    field :morphology
    field :location
    field :locationQualifier
    field :description
    field :image
    field :patient
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
