module QDM
  # app/models/qdm/payee.rb
  class Payee < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :type
    field :party
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
