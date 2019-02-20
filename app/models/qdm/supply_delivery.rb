module QDM
  # app/models/qdm/supply_delivery.rb
  class SupplyDelivery < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :basedOn
    field :partOf
    field :status
    field :patient
    field :type
    field :suppliedItem
    field :occurrence
    field :supplier
    field :destination
    field :receiver
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
