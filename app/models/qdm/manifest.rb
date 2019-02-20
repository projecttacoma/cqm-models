module QDM
  # app/models/qdm/manifest.rb
  class Manifest < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :rendering
    field :resource
    field :page
    field :image
    field :other
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
