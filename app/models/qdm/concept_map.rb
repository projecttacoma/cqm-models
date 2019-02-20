module QDM
  # app/models/qdm/concept_map.rb
  class ConceptMap < DataElement
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
    field :source
    field :target
    field :group
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
