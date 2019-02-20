module QDM
  # app/models/qdm/risk_evidence_synthesis.rb
  class RiskEvidenceSynthesis < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :url
    field :identifier
    field :version
    field :name
    field :title
    field :status
    field :date
    field :publisher
    field :contact
    field :description
    field :note
    field :useContext
    field :jurisdiction
    field :copyright
    field :approvalDate
    field :lastReviewDate
    field :effectivePeriod
    field :topic
    field :author
    field :editor
    field :reviewer
    field :endorser
    field :relatedArtifact
    field :synthesisType
    field :studyType
    field :population
    field :exposure
    field :outcome
    field :sampleSize
    field :riskEstimate
    field :certainty
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
