module QDM
  # app/models/qdm/payment.rb
  class Payment < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :type
    field :adjustment
    field :adjustmentReason
    field :date
    field :amount
    field :identifier
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
