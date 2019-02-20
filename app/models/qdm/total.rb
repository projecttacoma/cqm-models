module QDM
  # app/models/qdm/total.rb
  class Total < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :category
    field :amount
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
