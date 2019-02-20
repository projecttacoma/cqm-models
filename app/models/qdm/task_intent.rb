module QDM
  # app/models/qdm/task_intent.rb
  class TaskIntent < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
