module QDM
  # app/models/qdm/structure_variant.rb
  class StructureVariant < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :variantType
    field :exact
    field :length
    field :outer
    field :inner
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
