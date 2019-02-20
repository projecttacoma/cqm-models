module QDM
  # app/models/qdm/location.rb
  class Location < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :location
    field :status
    field :physicalType
    field :period
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
