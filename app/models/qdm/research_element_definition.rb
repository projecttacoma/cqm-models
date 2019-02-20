module QDM
  # app/models/qdm/research_element_definition.rb
  class ResearchElementDefinition < DataElement
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
    field :experimental
    field :subject
    field :date
    field :publisher
    field :contact
    field :description
    field :comment
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
    field :library
    field :type
    field :variableType
    field :characteristic
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
