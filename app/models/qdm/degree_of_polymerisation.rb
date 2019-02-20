module QDM
  # app/models/qdm/degree_of_polymerisation.rb
  class DegreeOfPolymerisation < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :degree
    field :amount
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
