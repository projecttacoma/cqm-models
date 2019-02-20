module QDM
  # app/models/qdm/compose.rb
  class Compose < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :lockedDate
    field :inactive
    field :include
    field :exclude
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
