module QDM
  # app/models/qdm/relationship.rb
  class Relationship < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :substance
    field :relationship
    field :isDefining
    field :amount
    field :amountRatioLowLimit
    field :amountType
    field :source
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
