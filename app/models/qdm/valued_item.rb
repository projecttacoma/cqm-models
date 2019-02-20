module QDM
  # app/models/qdm/valued_item.rb
  class ValuedItem < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :entity
    field :identifier
    field :effectiveTime
    field :quantity
    field :unitPrice
    field :factor
    field :points
    field :net
    field :payment
    field :paymentDate
    field :responsible
    field :recipient
    field :linkId
    field :securityLabelNumber
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
