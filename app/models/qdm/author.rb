module QDM
  # app/models/qdm/author.rb
  class Author < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :authorType
    field :authorDescription
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
