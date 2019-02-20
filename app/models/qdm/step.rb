module QDM
  # app/models/qdm/step.rb
  class Step < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :process
    field :pause
    field :operation
    field :alternative
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
