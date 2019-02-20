module QDM
  # app/models/qdm/measure_report.rb
  class MeasureReport < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :status
    field :type
    field :measure
    field :subject
    field :date
    field :reporter
    field :period
    field :improvementNotation
    field :group
    field :evaluatedResource
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
