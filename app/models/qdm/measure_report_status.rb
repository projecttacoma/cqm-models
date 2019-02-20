module QDM
  # app/models/qdm/measure_report_status.rb
  class MeasureReportStatus < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
