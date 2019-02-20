module QDM
  # app/models/qdm/qualification.rb
  class Qualification < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :code
    field :period
    field :issuer
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
