module QDM
  # app/models/qdm/timing.rb
  class Timing < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :event
    field :repeat
    field :code
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
