module QDM
  # app/models/qdm/diagnostic_report.rb
  class DiagnosticReport < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :basedOn
    field :status
    field :category
    field :code
    field :subject
    field :encounter
    field :effective
    field :issued
    field :performer
    field :resultsInterpreter
    field :specimen
    field :result
    field :imagingStudy
    field :media
    field :conclusion
    field :conclusionQDM::Code
    field :presentedForm
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
