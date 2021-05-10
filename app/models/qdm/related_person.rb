module QDM
  # app/models/qdm/related_person.rb
  class RelatedPerson < DataElement
    include Mongoid::Document
    embedded_in :patient
    embeds_one :identifier, class_name: 'QDM::Identifier'
    field :linkedPatientId, type: String
    field :qdmTitle, type: String, default: 'Related Person'
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.4.141'
    field :qdmCategory, type: String, default: 'related_person'
    field :qdmVersion, type: String, default: '5.6'
  end
end
