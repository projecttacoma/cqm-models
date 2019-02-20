module QDM
  # app/models/qdm/component.rb
  class Component < DataElement
    include Mongoid::Document
    field :code
    field :value
    field :dataAbsentReason
    field :interpretation
    field :referenceRange
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
