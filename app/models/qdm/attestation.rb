module QDM
  # app/models/qdm/attestation.rb
  class Attestation < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :who
    field :onBehalfOf
    field :communicationMethod
    field :date
    field :sourceIdentityCertificate
    field :proxyIdentityCertificate
    field :proxySignature
    field :sourceSignature
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
