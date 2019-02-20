module QDM
  # app/models/qdm/enable_when.rb
  class EnableWhen < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :question
    field :operator
    field :answer
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
