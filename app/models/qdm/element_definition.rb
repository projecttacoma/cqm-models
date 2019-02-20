module QDM
  # app/models/qdm/element_definition.rb
  class ElementDefinition < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :path
    field :representation
    field :sliceName
    field :sliceIsConstraining
    field :label
    field :code
    field :slicing
    field :short
    field :definition
    field :comment
    field :requirements
    field :alias
    field :min
    field :max
    field :base
    field :contentReference
    field :type
    field :defaultValue
    field :meaningWhenMissing
    field :orderMeaning
    field :fixed
    field :pattern
    field :example
    field :minValue
    field :maxValue
    field :maxLength
    field :condition
    field :constraint
    field :mustSupport
    field :isModifier
    field :isModifierReason
    field :isSummary
    field :binding
    field :mapping
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
