module QDM
  # app/models/qdm/repeat_unit.rb
  class RepeatUnit < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :orientationOfPolymerisation
    field :repeatUnit
    field :amount
    field :degreeOfPolymerisation
    field :structuralRepresentation
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
