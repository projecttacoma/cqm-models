module QDM
  # app/models/qdm/agent.rb
  class Agent < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :type
    field :role
    field :who
    field :onBehalfOf
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
