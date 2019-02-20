module QDM
  # app/models/qdm/monomer_set.rb
  class MonomerSet < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :ratioType
    field :startingMaterial
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
