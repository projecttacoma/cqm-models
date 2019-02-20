module QDM
  # app/models/qdm/characteristics.rb
  class Characteristics < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :code
    field :status
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
