module QDM
  # app/models/qdm/research_study.rb
  class ResearchStudy < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :title
    field :protocol
    field :partOf
    field :status
    field :primaryPurposeType
    field :phase
    field :category
    field :focus
    field :condition
    field :contact
    field :relatedArtifact
    field :keyword
    field :location
    field :description
    field :enrollment
    field :period
    field :sponsor
    field :principalInvestigator
    field :site
    field :reasonStopped
    field :note
    field :arm
    field :objective
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
