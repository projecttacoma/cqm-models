module QDM
  # app/models/qdm/contract.rb
  class Contract < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :url
    field :version
    field :status
    field :legalState
    field :instantiatesCanonical
    field :instantiatesUri
    field :contentDerivative
    field :issued
    field :applies
    field :expirationType
    field :subject
    field :authority
    field :domain
    field :site
    field :name
    field :title
    field :subtitle
    field :alias
    field :author
    field :scope
    field :topic
    field :type
    field :subType
    field :contentDefinition
    field :term
    field :supportingInfo
    field :relevantHistory
    field :signer
    field :friendly
    field :legal
    field :rule
    field :legallyBinding
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
