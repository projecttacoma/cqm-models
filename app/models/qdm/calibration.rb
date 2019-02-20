module QDM
  # app/models/qdm/calibration.rb
  class Calibration < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :type
    field :state
    field :time
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
