module QDM
  # app/models/qdm/capability_statement_kind.rb
  class CapabilityStatementKind < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
