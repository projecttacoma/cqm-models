module QDM
  # app/models/qdm/target.rb
  class Target < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :target
    field :type
    field :interaction
    field :organism
    field :organismType
    field :amount
    field :amountType
    field :source
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
