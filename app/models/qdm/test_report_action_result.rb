module QDM
  # app/models/qdm/test_report_action_result.rb
  class TestReportActionResult < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
