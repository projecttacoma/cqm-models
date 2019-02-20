module QDM
  # app/models/qdm/differential.rb
  class Differential < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :element
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
