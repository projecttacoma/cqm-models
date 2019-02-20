module QDM
  # app/models/qdm/trigger_definition.rb
  class TriggerDefinition < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :type
    field :name
    field :timing
    field :data
    field :condition
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
