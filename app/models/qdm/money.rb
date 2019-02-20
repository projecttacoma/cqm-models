module QDM
  # app/models/qdm/money.rb
  class Money < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :currency
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
