module QDM
  # app/models/qdm/manipulation.rb
  class Manipulation < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :description
    field :time
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
