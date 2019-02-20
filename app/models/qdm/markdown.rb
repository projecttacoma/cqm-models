module QDM
  # app/models/qdm/markdown.rb
  class Markdown < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
