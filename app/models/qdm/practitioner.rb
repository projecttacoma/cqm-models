module QDM
  # app/models/qdm/practitioner.rb
  class Practitioner < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :active
    field :name
    field :telecom
    field :address
    field :gender
    field :birthDate
    field :photo
    field :qualification
    field :communication
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
