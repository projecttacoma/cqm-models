module QDM
  # app/models/qdm/reference_range.rb
  class ReferenceRange < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :low
    field :high
    field :type
    field :appliesTo
    field :age
    field :text
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
