module QDM
  # app/models/qdm/value_set.rb
  class ValueSet < DataElement
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
    field :immutable
    field :purpose
    field :copyright
    field :compose
    field :expansion
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
