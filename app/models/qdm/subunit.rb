module QDM
  # app/models/qdm/subunit.rb
  class Subunit < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :subunit
    field :sequence
    field :length
    field :sequenceAttachment
    field :fivePrime
    field :threePrime
    field :linkage
    field :sugar
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
