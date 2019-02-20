module QDM
  # app/models/qdm/substance_specification.rb
  class SubstanceSpecification < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :type
    field :status
    field :domain
    field :description
    field :source
    field :comment
    field :moiety
    field :property
    field :referenceInformation
    field :structure
    field :code
    field :name
    field :molecularWeight
    field :relationship
    field :nucleicAcid
    field :polymer
    field :protein
    field :sourceMaterial
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
