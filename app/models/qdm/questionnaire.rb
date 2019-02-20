module QDM
  # app/models/qdm/questionnaire.rb
  class Questionnaire < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :url
    field :identifier
    field :version
    field :name
    field :title
    field :derivedFrom
    field :status
    field :experimental
    field :subjectType
    field :date
    field :publisher
    field :contact
    field :description
    field :useContext
    field :jurisdiction
    field :purpose
    field :copyright
    field :approvalDate
    field :lastReviewDate
    field :effectivePeriod
    field :code
    field :item
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
