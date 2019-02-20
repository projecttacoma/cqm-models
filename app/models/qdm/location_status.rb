module QDM
  # app/models/qdm/location_status.rb
  class LocationStatus < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
