module QDM
  # app/models/qdm/action2.rb
  class Action2 < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :operation
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
