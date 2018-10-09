module QDM
  # app/models/qdm/id.rb
  class Id
    include Mongoid::Document
    embedded_in :data_element
    field :namingSystem, type: String
    field :value, type: String
    field :qdmVersion, type: String, default: '5.4'
  end
end
