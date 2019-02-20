module QDM
  # app/models/qdm/limit.rb
  class Limit < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :code
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
