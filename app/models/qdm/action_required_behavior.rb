module QDM
  # app/models/qdm/action_required_behavior.rb
  class ActionRequiredBehavior < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
