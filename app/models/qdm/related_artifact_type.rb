module QDM
  # app/models/qdm/related_artifact_type.rb
  class RelatedArtifactType < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
