module QDM
  # app/models/qdm/sequence_type.rb
  class SequenceType < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
