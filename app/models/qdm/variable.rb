module QDM
  # app/models/qdm/variable.rb
  class Variable < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :name
    field :defaultValue
    field :description
    field :expression
    field :headerField
    field :hint
    field :path
    field :sourceId
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
