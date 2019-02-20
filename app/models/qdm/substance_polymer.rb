module QDM
  # app/models/qdm/substance_polymer.rb
  class SubstancePolymer < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :class
    field :geometry
    field :copolymerConnectivity
    field :modification
    field :monomerSet
    field :repeat
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
