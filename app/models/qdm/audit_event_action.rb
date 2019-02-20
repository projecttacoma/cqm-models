module QDM
  # app/models/qdm/audit_event_action.rb
  class AuditEventAction < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
