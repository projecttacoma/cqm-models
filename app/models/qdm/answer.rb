module QDM
  # app/models/qdm/answer.rb
  class Answer < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :item
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
