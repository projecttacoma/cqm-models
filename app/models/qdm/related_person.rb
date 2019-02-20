module QDM
  # app/models/qdm/related_person.rb
  class RelatedPerson < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :active
    field :patient
    field :relationship
    field :name
    field :telecom
    field :gender
    field :birthDate
    field :address
    field :photo
    field :period
    field :communication
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
