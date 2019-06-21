module QDM
  # app/models/qdm/related_person.rb
  class RelatedPerson < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier, type: QDM::Identifier
    field :linkedPatientId, type: String
    field :qdmTitle, type: String, default: 'Related Person'
    field :qdmVersion, type: String, default: '5.5'
  end
end
