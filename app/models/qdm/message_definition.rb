module QDM
  # app/models/qdm/message_definition.rb
  class MessageDefinition < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :url
    field :identifier
    field :version
    field :name
    field :title
    field :replaces
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
    field :base
    field :parent
    field :event
    field :category
    field :focus
    field :responseRequired
    field :allowedResponse
    field :graph
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
