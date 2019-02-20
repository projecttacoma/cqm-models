module QDM
  # app/models/qdm/gene.rb
  class Gene < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :geneSequenceOrigin
    field :gene
    field :source
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
