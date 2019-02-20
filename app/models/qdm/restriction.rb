module QDM
  # app/models/qdm/restriction.rb
  class Restriction < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :repetitions
    field :period
    field :recipient
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
