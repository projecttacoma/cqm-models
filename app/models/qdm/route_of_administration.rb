module QDM
  # app/models/qdm/route_of_administration.rb
  class RouteOfAdministration < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :code
    field :firstDose
    field :maxSingleDose
    field :maxDosePerDay
    field :maxDosePerTreatmentPeriod
    field :maxTreatmentPeriod
    field :targetSpecies
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
