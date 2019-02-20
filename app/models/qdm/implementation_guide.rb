module QDM
  # app/models/qdm/implementation_guide.rb
  class ImplementationGuide < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :url
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
    field :copyright
    field :packageId
    field :license
    field :fhirVersion
    field :dependsOn
    field :global
    field :definition
    field :manifest
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
