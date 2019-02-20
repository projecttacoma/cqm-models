module QDM
  # app/models/qdm/actor.rb
  class Actor < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :actorId
    field :type
    field :name
    field :description
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
