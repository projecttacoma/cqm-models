module QDM
  # app/models/qdm/operation_outcome.rb
  class OperationOutcome < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :issue
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
