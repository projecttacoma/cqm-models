module QDM
  # app/models/qdm/constraint.rb
  class Constraint < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :key
    field :requirements
    field :severity
    field :human
    field :expression
    field :xpath
    field :source
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
