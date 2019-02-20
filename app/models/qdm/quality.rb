module QDM
  # app/models/qdm/quality.rb
  class Quality < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :type
    field :standardSequence
    field :start
    field :end
    field :score
    field :method
    field :truthTP
    field :queryTP
    field :truthFN
    field :queryFP
    field :gtFP
    field :precision
    field :recall
    field :fScore
    field :roc
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
