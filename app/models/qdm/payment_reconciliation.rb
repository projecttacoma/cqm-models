module QDM
  # app/models/qdm/payment_reconciliation.rb
  class PaymentReconciliation < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :status
    field :period
    field :created
    field :paymentIssuer
    field :request
    field :requestor
    field :outcome
    field :disposition
    field :paymentDate
    field :paymentAmount
    field :paymentIdentifier
    field :detail
    field :formQDM::Code
    field :processNote
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
