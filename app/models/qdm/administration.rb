module QDM
  # app/models/qdm/administration.rb
  class Administration < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :schedule
    field :quantity
    field :rate
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
