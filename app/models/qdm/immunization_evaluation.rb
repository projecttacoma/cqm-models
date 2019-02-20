module QDM
  # app/models/qdm/immunization_evaluation.rb
  class ImmunizationEvaluation < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :status
    field :patient
    field :date
    field :authority
    field :targetDisease
    field :immunizationEvent
    field :doseStatus
    field :doseStatusReason
    field :description
    field :series
    field :doseNumber
    field :seriesDoses
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
