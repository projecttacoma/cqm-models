module QDM
  # app/models/qdm/container.rb
  class Container < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :material
    field :type
    field :cap
    field :description
    field :capacity
    field :minimumVolume
    field :additive
    field :preparation
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
