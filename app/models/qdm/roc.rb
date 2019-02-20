module QDM
  # app/models/qdm/roc.rb
  class Roc < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :score
    field :numTP
    field :numFP
    field :numFN
    field :precision
    field :sensitivity
    field :fMeasure
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
