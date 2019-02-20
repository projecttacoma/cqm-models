module QDM
  # app/models/qdm/id.rb
  class Id
    include Mongoid::Document
    embedded_in :data_element
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
