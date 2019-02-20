module QDM
  # app/models/qdm/texture.rb
  class Texture < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :modifier
    field :foodType
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
