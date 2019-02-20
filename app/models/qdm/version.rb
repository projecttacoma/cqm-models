module QDM
  # app/models/qdm/version.rb
  class Version < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :versionId
    field :description
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
