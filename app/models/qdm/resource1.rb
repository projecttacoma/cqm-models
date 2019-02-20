module QDM
  # app/models/qdm/resource1.rb
  class Resource1 < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :reference
    field :example
    field :relativePath
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
