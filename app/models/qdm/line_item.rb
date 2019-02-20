module QDM
  # app/models/qdm/line_item.rb
  class LineItem < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :sequence
    field :chargeItem
    field :priceComponent
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
