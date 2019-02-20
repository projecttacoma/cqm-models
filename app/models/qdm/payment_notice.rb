module QDM
  # app/models/qdm/payment_notice.rb
  class PaymentNotice < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :status
    field :request
    field :response
    field :created
    field :provider
    field :payment
    field :paymentDate
    field :payee
    field :recipient
    field :amount
    field :paymentStatus
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
