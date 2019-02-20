module QDM
  # app/models/qdm/signer.rb
  class Signer < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :type
    field :party
    field :signature
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
