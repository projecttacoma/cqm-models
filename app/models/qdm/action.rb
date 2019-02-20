module QDM
  # app/models/qdm/action.rb
  class Action < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :prefix
    field :title
    field :description
    field :textEquivalent
    field :priority
    field :code
    field :reason
    field :documentation
    field :goalId
    field :subject
    field :trigger
    field :condition
    field :input
    field :output
    field :relatedAction
    field :timing
    field :participant
    field :type
    field :groupingBehavior
    field :selectionBehavior
    field :requiredBehavior
    field :precheckBehavior
    field :cardinalityBehavior
    field :definition
    field :transform
    field :dynamicValue
    field :action
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
