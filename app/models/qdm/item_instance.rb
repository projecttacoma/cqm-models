module QDM
  # app/models/qdm/item_instance.rb
  class ItemInstance < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :count
    field :location
    field :subject
    field :manufactureDate
    field :expiryDate
    field :currentSWVersion
    field :lotNumber
    field :serialNumber
    field :carrierAIDC
    field :carrierHRF
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
