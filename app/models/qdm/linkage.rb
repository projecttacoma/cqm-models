module QDM
  # app/models/qdm/linkage.rb
  class Linkage < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :connectivity
    field :identifier
    field :name
    field :residueSite
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
