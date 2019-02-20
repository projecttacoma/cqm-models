module QDM
  # app/models/qdm/example_scenario_actor_type.rb
  class ExampleScenarioActorType < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
