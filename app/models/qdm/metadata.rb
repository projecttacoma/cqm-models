module QDM
  # app/models/qdm/metadata.rb
  class Metadata < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :link
    field :capability
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
