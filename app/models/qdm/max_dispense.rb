module QDM
  # app/models/qdm/max_dispense.rb
  class MaxDispense < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :quantity
    field :period
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
