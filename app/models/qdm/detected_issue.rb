module QDM
  # app/models/qdm/detected_issue.rb
  class DetectedIssue < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :status
    field :code
    field :severity
    field :patient
    field :identified
    field :author
    field :implicated
    field :evidence
    field :detail
    field :reference
    field :mitigation
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
