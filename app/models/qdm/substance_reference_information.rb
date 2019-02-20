module QDM
  # app/models/qdm/substance_reference_information.rb
  class SubstanceReferenceInformation < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :comment
    field :gene
    field :geneElement
    field :classification
    field :target
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
