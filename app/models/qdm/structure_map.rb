module QDM
  # app/models/qdm/structure_map.rb
  class StructureMap < DataElement
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
    field :structure
    field :import
    field :group
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
