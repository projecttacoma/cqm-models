module QDM
  # app/models/qdm/content_definition.rb
  class ContentDefinition < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :type
    field :subType
    field :publisher
    field :publicationDate
    field :publicationStatus
    field :copyright
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
