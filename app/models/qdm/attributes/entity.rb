module QDM
  # app/models/qdm/entity.rb
  class Entity < Attribute
    include Mongoid::Document
    field :id, type: String
    field :identifier, type: QDM::Identifier
    field :qdmVersion, type: String, default: '5.5'
  end
end
