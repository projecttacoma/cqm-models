module QDM
  # app/models/qdm/document_manifest.rb
  class DocumentManifest < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :masterIdentifier
    field :identifier
    field :status
    field :type
    field :subject
    field :created
    field :author
    field :recipient
    field :source
    field :description
    field :content
    field :related
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
