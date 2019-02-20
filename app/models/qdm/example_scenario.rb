module QDM
  # app/models/qdm/example_scenario.rb
  class ExampleScenario < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :url
    field :identifier
    field :version
    field :name
    field :status
    field :experimental
    field :date
    field :publisher
    field :contact
    field :useContext
    field :jurisdiction
    field :copyright
    field :purpose
    field :actor
    field :instance
    field :process
    field :workflow
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
