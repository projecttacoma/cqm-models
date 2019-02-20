module QDM
  # app/models/qdm/document_reference.rb
  class DocumentReference < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :masterIdentifier
    field :identifier
    field :status
    field :docStatus
    field :type
    field :category
    field :subject
    field :date
    field :author
    field :authenticator
    field :custodian
    field :relatesTo
    field :description
    field :securityLabel
    field :content
    field :context
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
