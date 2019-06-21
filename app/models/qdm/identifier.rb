module QDM
  # app/models/qdm/identifier.rb
  class Identifier
    include Mongoid::Document
    embedded_in :data_element
    field :namingSystem, type: String
    field :value, type: String
    field :qdmVersion, type: String, default: '5.5'
  end
end
