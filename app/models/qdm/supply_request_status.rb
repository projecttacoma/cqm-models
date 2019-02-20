module QDM
  # app/models/qdm/supply_request_status.rb
  class SupplyRequestStatus < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
