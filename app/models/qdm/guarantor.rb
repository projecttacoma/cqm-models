module QDM
  # app/models/qdm/guarantor.rb
  class Guarantor < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :party
    field :onHold
    field :period
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
