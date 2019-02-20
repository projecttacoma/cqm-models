module QDM
  # app/models/qdm/operation_parameter_use.rb
  class OperationParameterUse < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
