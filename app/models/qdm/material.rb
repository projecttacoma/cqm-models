module QDM
  # app/models/qdm/material.rb
  class Material < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :substance
    field :alternate
    field :allergenicIndicator
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
