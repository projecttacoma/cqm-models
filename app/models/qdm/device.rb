module QDM
  # app/models/qdm/device.rb
  class Device < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :definition
    field :udiCarrier
    field :status
    field :statusReason
    field :distinctIdentifier
    field :manufacturer
    field :manufactureDate
    field :expirationDate
    field :lotNumber
    field :serialNumber
    field :deviceName
    field :modelNumber
    field :partNumber
    field :type
    field :specialization
    field :version
    field :property
    field :patient
    field :owner
    field :contact
    field :location
    field :url
    field :note
    field :safety
    field :parent
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
