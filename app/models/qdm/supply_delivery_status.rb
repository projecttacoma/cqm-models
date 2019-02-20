module QDM
  # app/models/qdm/supply_delivery_status.rb
  class SupplyDeliveryStatus < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
