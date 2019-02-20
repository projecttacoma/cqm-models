module QDM
  # app/models/qdm/validator.rb
  class Validator < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :organization
    field :identityCertificate
    field :attestationSignature
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
