module QDM
  # app/models/qdm/gene_element.rb
  class GeneElement < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :type
    field :element
    field :source
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
