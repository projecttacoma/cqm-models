module QDM
  # app/models/qdm/research_subject_status.rb
  class ResearchSubjectStatus < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
