module QDM
  # app/models/qdm/identifier.rb
  class Identifier < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :use
    field :type
    field :system
    field :value
    field :period
    field :assigner
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
