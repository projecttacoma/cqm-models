module QDM
  # app/models/qdm/document.rb
  class Document < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :mode
    field :documentation
    field :profile
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
