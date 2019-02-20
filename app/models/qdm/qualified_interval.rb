module QDM
  # app/models/qdm/qualified_interval.rb
  class QualifiedInterval < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :category
    field :range
    field :context
    field :appliesTo
    field :gender
    field :age
    field :gestationalAge
    field :condition
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
