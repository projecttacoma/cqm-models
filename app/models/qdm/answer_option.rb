module QDM
  # app/models/qdm/answer_option.rb
  class AnswerOption < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :initialSelected
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
