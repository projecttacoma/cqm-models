module QDM
  # app/models/qdm/organization.rb
  class Organization < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :active
    field :type
    field :name
    field :alias
    field :telecom
    field :address
    field :partOf
    field :contact
    field :endpoint
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
