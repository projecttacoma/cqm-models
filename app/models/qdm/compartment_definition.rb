module QDM
  # app/models/qdm/compartment_definition.rb
  class CompartmentDefinition < DataElement
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
    field :purpose
    field :code
    field :search
    field :resource
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
