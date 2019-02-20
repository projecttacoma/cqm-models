module QDM
  # app/models/qdm/benefit1.rb
  class Benefit1 < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :type
    field :cost
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
