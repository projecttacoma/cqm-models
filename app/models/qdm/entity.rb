module QDM
  # app/models/qdm/entity.rb
  class Entity < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :what
    field :type
    field :role
    field :lifecycle
    field :securityLabel
    field :name
    field :description
    field :query
    field :detail
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
