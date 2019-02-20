module QDM
  # app/models/qdm/resource.rb
  class Resource < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :id
    field :meta
    field :implicitRules
    field :language
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
