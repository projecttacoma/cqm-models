module QDM
  # app/models/qdm/reaction.rb
  class Reaction < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :date
    field :detail
    field :reported
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
