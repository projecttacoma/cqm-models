module QDM
  # app/models/qdm/event_definition.rb
  class EventDefinition < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :url
    field :identifier
    field :version
    field :name
    field :title
    field :subtitle
    field :status
    field :experimental
    field :subject
    field :date
    field :publisher
    field :contact
    field :description
    field :useContext
    field :jurisdiction
    field :purpose
    field :usage
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
    field :trigger
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
