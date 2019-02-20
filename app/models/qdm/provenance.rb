module QDM
  # app/models/qdm/provenance.rb
  class Provenance < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :target
    field :occurred
    field :recorded
    field :policy
    field :location
    field :reason
    field :activity
    field :agent
    field :entity
    field :signature
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
