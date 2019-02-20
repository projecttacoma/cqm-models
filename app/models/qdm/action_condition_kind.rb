module QDM
  # app/models/qdm/action_condition_kind.rb
  class ActionConditionKind < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
