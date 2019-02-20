module QDM
  # app/models/qdm/quantity_comparator.rb
  class QuantityComparator < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
