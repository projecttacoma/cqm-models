module QDM
  # app/models/qdm/document_reference_status.rb
  class DocumentReferenceStatus < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
