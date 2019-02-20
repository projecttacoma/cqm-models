module QDM
  # app/models/qdm/substance_amount.rb
  class SubstanceAmount < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :amount
    field :amountType
    field :amountText
    field :referenceRange
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
