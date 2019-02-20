module QDM
  # app/models/qdm/capability_statement.rb
  class CapabilityStatement < DataElement
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
    field :purpose
    field :copyright
    field :kind
    field :instantiates
    field :imports
    field :software
    field :implementation
    field :fhirVersion
    field :format
    field :patchFormat
    field :implementationGuide
    field :rest
    field :messaging
    field :document
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
