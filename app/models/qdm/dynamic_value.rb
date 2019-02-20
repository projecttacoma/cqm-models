module QDM
  # app/models/qdm/dynamic_value.rb
  class DynamicValue < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :path
    field :expression
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
