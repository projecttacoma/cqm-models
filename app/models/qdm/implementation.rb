module QDM
  # app/models/qdm/implementation.rb
  class Implementation < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :description
    field :url
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
