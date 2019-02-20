module QDM
  # app/models/qdm/task_status.rb
  class TaskStatus < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
