module QDM
  # app/models/qdm/questionnaire_response.rb
  class QuestionnaireResponse < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :basedOn
    field :partOf
    field :questionnaire
    field :status
    field :subject
    field :encounter
    field :authored
    field :author
    field :source
    field :item
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
