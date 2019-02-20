module QDM
  # app/models/qdm/substance.rb
  class Substance < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :code
    field :strength
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
