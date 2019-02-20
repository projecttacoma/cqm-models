module QDM
  # app/models/qdm/diagnostic_report_status.rb
  class DiagnosticReportStatus < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
