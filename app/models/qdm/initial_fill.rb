module QDM
  # app/models/qdm/initial_fill.rb
  class InitialFill < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :quantity
    field :duration
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
