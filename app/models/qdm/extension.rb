module QDM
  # app/models/qdm/extension.rb
  class Extension < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :url
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
