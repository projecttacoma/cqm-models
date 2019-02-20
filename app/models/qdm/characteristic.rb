module QDM
  # app/models/qdm/characteristic.rb
  class Characteristic < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :code
    field :value
    field :exclude
    field :period
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
