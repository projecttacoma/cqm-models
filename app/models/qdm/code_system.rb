module QDM
  # app/models/qdm/code_system.rb
  class CodeSystem < DataElement
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
    field :caseSensitive
    field :valueSet
    field :hierarchyMeaning
    field :compositional
    field :versionNeeded
    field :content
    field :supplements
    field :count
    field :filter
    field :property
    field :concept
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
