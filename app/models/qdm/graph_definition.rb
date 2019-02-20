module QDM
  # app/models/qdm/graph_definition.rb
  class GraphDefinition < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :url
    field :version
    field :name
    field :status
    field :experimental
    field :date
    field :publisher
    field :contact
    field :description
    field :useContext
    field :jurisdiction
    field :purpose
    field :start
    field :profile
    field :link
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
