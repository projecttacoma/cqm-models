module QDM
  # app/models/qdm/goal_lifecycle_status.rb
  class GoalLifecycleStatus < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
