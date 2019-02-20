module QDM
  # app/models/qdm/range.rb
  class Range < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :low
    field :high
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
