module QDM
  # app/models/qdm/condition.rb
  class Condition < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :kind
    field :expression
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
