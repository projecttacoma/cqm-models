module QDM
  # app/models/qdm/graph_compartment_use.rb
  class GraphCompartmentUse < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
