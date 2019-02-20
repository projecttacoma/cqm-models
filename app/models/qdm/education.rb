module QDM
  # app/models/qdm/education.rb
  class Education < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :documentType
    field :reference
    field :publicationDate
    field :presentationDate
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
