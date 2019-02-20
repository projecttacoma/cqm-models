module QDM
  # app/models/qdm/reference_seq.rb
  class ReferenceSeq < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :chromosome
    field :genomeBuild
    field :orientation
    field :referenceSeqId
    field :referenceSeqPointer
    field :referenceSeqString
    field :strand
    field :windowStart
    field :windowEnd
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
