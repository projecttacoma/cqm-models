module QDM
  # app/models/qdm/supplement.rb
  class Supplement < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :type
    field :productName
    field :schedule
    field :quantity
    field :instruction
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
