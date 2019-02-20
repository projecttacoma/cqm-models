module QDM
  # app/models/qdm/device_definition.rb
  class DeviceDefinition < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :udiDeviceIdentifier
    field :manufacturer
    field :deviceName
    field :modelNumber
    field :type
    field :specialization
    field :version
    field :safety
    field :shelfLifeStorage
    field :physicalCharacteristics
    field :languageQDM::Code
    field :capability
    field :property
    field :owner
    field :contact
    field :url
    field :onlineInformation
    field :note
    field :quantity
    field :parentDevice
    field :material
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
