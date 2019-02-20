module QDM
  # app/models/qdm/interactant.rb
  class Interactant < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :item
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
