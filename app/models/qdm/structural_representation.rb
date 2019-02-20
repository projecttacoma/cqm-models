module QDM
  # app/models/qdm/structural_representation.rb
  class StructuralRepresentation < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :type
    field :representation
    field :attachment
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
