module QDM
  # app/models/qdm/goal.rb
  class Goal < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :lifecycleStatus
    field :achievementStatus
    field :category
    field :priority
    field :description
    field :subject
    field :start
    field :target
    field :statusDate
    field :statusReason
    field :expressedBy
    field :addresses
    field :note
    field :outcomeQDM::Code
    field :outcomeReference
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
