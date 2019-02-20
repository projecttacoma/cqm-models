module QDM
  # app/models/qdm/publication_status.rb
  class PublicationStatus < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
