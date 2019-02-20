module QDM
  # app/models/qdm/charge_item_status.rb
  class ChargeItemStatus < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
