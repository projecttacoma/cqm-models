module QDM
  # app/models/qdm/binding.rb
  class Binding < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :strength
    field :valueSet
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
