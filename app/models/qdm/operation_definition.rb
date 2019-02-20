module QDM
  # app/models/qdm/operation_definition.rb
  class OperationDefinition < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :url
    field :version
    field :name
    field :title
    field :status
    field :kind
    field :experimental
    field :date
    field :publisher
    field :contact
    field :description
    field :useContext
    field :jurisdiction
    field :purpose
    field :affectsState
    field :code
    field :comment
    field :base
    field :resource
    field :system
    field :type
    field :instance
    field :inputProfile
    field :outputProfile
    field :parameter
    field :overload
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
