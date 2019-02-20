module QDM
  # app/models/qdm/constraint_severity.rb
  class ConstraintSeverity < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
