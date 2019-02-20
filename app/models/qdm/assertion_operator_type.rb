module QDM
  # app/models/qdm/assertion_operator_type.rb
  class AssertionOperatorType < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
