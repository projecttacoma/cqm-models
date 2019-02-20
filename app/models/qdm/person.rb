module QDM
  # app/models/qdm/person.rb
  class Person < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :name
    field :telecom
    field :gender
    field :birthDate
    field :address
    field :photo
    field :managingOrganization
    field :active
    field :link
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
