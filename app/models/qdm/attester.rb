module QDM
  # app/models/qdm/attester.rb
  class Attester < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :mode
    field :time
    field :party
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
