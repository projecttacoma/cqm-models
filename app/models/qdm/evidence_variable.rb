module QDM
  # app/models/qdm/evidence_variable.rb
  class EvidenceVariable < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :url
    field :identifier
    field :version
    field :name
    field :title
    field :shortTitle
    field :subtitle
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
    field :type
    field :characteristic
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
