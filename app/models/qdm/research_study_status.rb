module QDM
  # app/models/qdm/research_study_status.rb
  class ResearchStudyStatus < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
