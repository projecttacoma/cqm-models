module QDM
  # app/models/qdm/expression.rb
  class Expression < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :description
    field :name
    field :language
    field :expression
    field :reference
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
