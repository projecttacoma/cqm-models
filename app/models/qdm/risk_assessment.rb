module QDM
  # app/models/qdm/risk_assessment.rb
  class RiskAssessment < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :basedOn
    field :parent
    field :status
    field :method
    field :code
    field :subject
    field :context
    field :occurrence
    field :condition
    field :performer
    field :reasonQDM::Code
    field :reasonReference
    field :basis
    field :prediction
    field :mitigation
    field :note
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
