module QDM
  # app/models/qdm/related_artifact.rb
  class RelatedArtifact < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :type
    field :label
    field :display
    field :citation
    field :url
    field :document
    field :resource
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
