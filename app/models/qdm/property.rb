module QDM
  # app/models/qdm/property.rb
  class Property < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :category
    field :code
    field :parameters
    field :definingSubstance
    field :amount
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
