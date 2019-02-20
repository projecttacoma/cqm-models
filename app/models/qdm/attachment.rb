module QDM
  # app/models/qdm/attachment.rb
  class Attachment < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :contentType
    field :language
    field :data
    field :url
    field :size
    field :hash
    field :title
    field :creation
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
