module QDM
  # app/models/qdm/meta.rb
  class Meta < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :versionId
    field :lastUpdated
    field :source
    field :profile
    field :security
    field :tag
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
