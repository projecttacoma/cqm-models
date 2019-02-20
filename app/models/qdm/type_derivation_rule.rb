module QDM
  # app/models/qdm/type_derivation_rule.rb
  class TypeDerivationRule < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
