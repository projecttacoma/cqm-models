module QDM
  # app/models/qdm/quantity.rb
  class Quantity < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :comparator
    field :unit
    field :system
    field :code
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
