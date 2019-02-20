module QDM
  # app/models/qdm/action_selection_behavior.rb
  class ActionSelectionBehavior < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
