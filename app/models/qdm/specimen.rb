module QDM
  # app/models/qdm/specimen.rb
  class Specimen < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :accessionIdentifier
    field :status
    field :type
    field :subject
    field :receivedTime
    field :parent
    field :request
    field :collection
    field :processing
    field :container
    field :condition
    field :note
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
