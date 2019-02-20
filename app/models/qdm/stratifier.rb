module QDM
  # app/models/qdm/stratifier.rb
  class Stratifier < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :code
    field :stratum
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
