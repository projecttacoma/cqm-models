module QDM
  # app/models/qdm/compartment.rb
  class Compartment < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :use
    field :code
    field :rule
    field :expression
    field :description
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
