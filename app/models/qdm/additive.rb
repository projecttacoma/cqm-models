module QDM
  # app/models/qdm/additive.rb
  class Additive < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :additive
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
