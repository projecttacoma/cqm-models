module QDM
  # app/models/qdm/entity.rb
  class Entity < Attribute
    include Mongoid::Document
    embedded_in :data_element
    field :id, type: String
    embeds_one :identifier, class_name: 'QDM::Identifier'
    field :qdmVersion, type: String, default: '5.6'
    def initialize(options = {})
      super(options)
      # default id to the mongo ObjectId for this DataElement if it isnt already defined
      self.id = _id.to_s unless id?
    end
  end
end
