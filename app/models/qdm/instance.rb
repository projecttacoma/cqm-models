module QDM
  # app/models/qdm/instance.rb
  class Instance < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :resourceId
    field :resourceType
    field :name
    field :description
    field :version
    field :containedInstance
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
