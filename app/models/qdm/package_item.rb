module QDM
  # app/models/qdm/package_item.rb
  class PackageItem < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :type
    field :quantity
    field :material
    field :alternateMaterial
    field :device
    field :manufacturedItem
    field :packageItem
    field :physicalCharacteristics
    field :otherCharacteristics
    field :shelfLifeStorage
    field :manufacturer
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
