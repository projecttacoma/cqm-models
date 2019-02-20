module QDM
  # app/models/qdm/kinetics.rb
  class Kinetics < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :areaUnderCurve
    field :lethalDose50
    field :halfLifePeriod
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
