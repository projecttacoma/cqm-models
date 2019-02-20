module QDM
  # app/models/qdm/endpoint.rb
  class Endpoint < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :status
    field :connectionType
    field :name
    field :managingOrganization
    field :contact
    field :period
    field :payloadType
    field :payloadMimeType
    field :address
    field :header
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
