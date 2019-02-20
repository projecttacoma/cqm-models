module QDM
  # app/models/qdm/position.rb
  class Position < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :longitude
    field :latitude
    field :altitude
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
