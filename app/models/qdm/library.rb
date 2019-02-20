module QDM
  # app/models/qdm/library.rb
  class Library < DataElement
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
    field :type
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
    field :parameter
    field :dataRequirement
    field :content
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
