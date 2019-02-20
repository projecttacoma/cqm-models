module QDM
  # app/models/qdm/audit_event.rb
  class AuditEvent < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :type
    field :subtype
    field :action
    field :period
    field :recorded
    field :outcome
    field :outcomeDesc
    field :purposeOfEvent
    field :agent
    field :source
    field :entity
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
