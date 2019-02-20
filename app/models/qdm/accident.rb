module QDM
  # app/models/qdm/accident.rb
  class Accident < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :date
    field :type
    field :location
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
