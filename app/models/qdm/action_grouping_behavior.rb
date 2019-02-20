module QDM
  # app/models/qdm/action_grouping_behavior.rb
  class ActionGroupingBehavior < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
