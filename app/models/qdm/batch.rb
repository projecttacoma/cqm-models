module QDM
  # app/models/qdm/batch.rb
  class Batch < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :lotNumber
    field :expirationDate
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
