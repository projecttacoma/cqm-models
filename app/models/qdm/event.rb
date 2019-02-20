module QDM
  # app/models/qdm/event.rb
  class Event < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :code
    field :period
    field :detail
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
