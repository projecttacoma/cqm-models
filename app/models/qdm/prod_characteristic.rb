module QDM
  # app/models/qdm/prod_characteristic.rb
  class ProdCharacteristic < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :height
    field :width
    field :depth
    field :weight
    field :nominalVolume
    field :externalDiameter
    field :shape
    field :color
    field :imprint
    field :image
    field :scoring
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
