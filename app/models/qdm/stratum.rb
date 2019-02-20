module QDM
  # app/models/qdm/stratum.rb
  class Stratum < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :component
    field :population
    field :measureScore
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
