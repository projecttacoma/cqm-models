module QDM
  # app/models/qdm/page.rb
  class Page < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :name
    field :title
    field :generation
    field :page
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
