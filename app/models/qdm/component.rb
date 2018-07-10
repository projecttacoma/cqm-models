module QDM
  # app/models/qdm/component.rb
  class Component < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :code
    field :result
    field :qdmVersion, type: String, default: '5.3'
  end
end
