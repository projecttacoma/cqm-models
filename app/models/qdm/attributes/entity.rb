module QDM
  # app/models/qdm/entity.rb
  class Entity < Attribute
    include Mongoid::Document
    field :id, type: String
    field :identifier, type: QDM::Identifier
    field :qdmVersion, type: String, default: '5.5'
    def initialize(options = {})
      super(options)
      # default id to the mongo ObjectId for this DataElement if it isnt already defined
      self.id = _id.to_s unless id?
    end
  end
end
