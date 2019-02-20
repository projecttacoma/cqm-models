module QDM
  # app/models/qdm/molecular_sequence.rb
  class MolecularSequence < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :type
    field :coordinateSystem
    field :patient
    field :specimen
    field :device
    field :performer
    field :quantity
    field :referenceSeq
    field :variant
    field :observedSeq
    field :quality
    field :readCoverage
    field :repository
    field :pointer
    field :structureVariant
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
