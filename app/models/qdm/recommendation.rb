module QDM
  # app/models/qdm/recommendation.rb
  class Recommendation < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :vaccineQDM::Code
    field :targetDisease
    field :contraindicatedVaccineQDM::Code
    field :forecastStatus
    field :forecastReason
    field :dateCriterion
    field :description
    field :series
    field :doseNumber
    field :seriesDoses
    field :supportingImmunization
    field :supportingPatientInformation
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
