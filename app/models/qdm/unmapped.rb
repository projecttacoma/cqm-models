module QDM
  # app/models/qdm/unmapped.rb
  class Unmapped < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :mode
    field :code
    field :display
    field :url
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
