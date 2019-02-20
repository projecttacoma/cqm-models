module QDM
  # app/models/qdm/starting_material.rb
  class StartingMaterial < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :material
    field :type
    field :isDefining
    field :amount
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
