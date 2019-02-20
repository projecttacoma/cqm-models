module QDM
  # app/models/qdm/research_subject.rb
  class ResearchSubject < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :status
    field :period
    field :study
    field :individual
    field :assignedArm
    field :actualArm
    field :consent
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
