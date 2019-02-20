module QDM
  # app/models/qdm/structure.rb
  class Structure < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :url
    field :mode
    field :alias
    field :documentation
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
