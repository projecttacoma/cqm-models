module QDM
  # app/models/qdm/price_component.rb
  class PriceComponent < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :type
    field :code
    field :factor
    field :amount
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
