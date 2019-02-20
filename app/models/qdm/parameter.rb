module QDM
  # app/models/qdm/parameter.rb
  class Parameter < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :name
    field :value
    field :resource
    field :part
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
