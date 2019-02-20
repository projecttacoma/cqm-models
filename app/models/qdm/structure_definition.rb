module QDM
  # app/models/qdm/structure_definition.rb
  class StructureDefinition < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :url
    field :identifier
    field :version
    field :name
    field :title
    field :status
    field :experimental
    field :date
    field :publisher
    field :contact
    field :description
    field :useContext
    field :jurisdiction
    field :purpose
    field :copyright
    field :keyword
    field :fhirVersion
    field :mapping
    field :kind
    field :abstract
    field :context
    field :contextInvariant
    field :type
    field :baseDefinition
    field :derivation
    field :snapshot
    field :differential
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
