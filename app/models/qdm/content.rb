module QDM
  # app/models/qdm/content.rb
  class Content < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :attachment
    field :format
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
