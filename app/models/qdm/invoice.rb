module QDM
  # app/models/qdm/invoice.rb
  class Invoice < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :status
    field :cancelledReason
    field :type
    field :subject
    field :recipient
    field :date
    field :participant
    field :issuer
    field :account
    field :lineItem
    field :totalPriceComponent
    field :totalNet
    field :totalGross
    field :paymentTerms
    field :note
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
