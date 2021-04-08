module QDM
  # app/models/qdm/identifier.rb
  class Identifier < Attribute
    include Mongoid::Document
    include Mongoid::Timestamps
    field :namingSystem, type: String
    field :value, type: String
    field :qdmVersion, type: String, default: '5.6'
  end
end
