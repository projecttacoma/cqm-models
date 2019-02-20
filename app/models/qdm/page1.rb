module QDM
  # app/models/qdm/page1.rb
  class Page1 < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :name
    field :title
    field :anchor
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
