module QDM
  # app/models/qdm/questionnaire_item_type.rb
  class QuestionnaireItemType < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
