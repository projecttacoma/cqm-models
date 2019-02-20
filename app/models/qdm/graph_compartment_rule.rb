module QDM
  # app/models/qdm/graph_compartment_rule.rb
  class GraphCompartmentRule < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
