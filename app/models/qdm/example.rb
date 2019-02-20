module QDM
  # app/models/qdm/example.rb
  class Example < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :label
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
