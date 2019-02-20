module QDM
  # app/models/qdm/variant.rb
  class Variant < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :start
    field :end
    field :observedAllele
    field :referenceAllele
    field :cigar
    field :variantPointer
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
