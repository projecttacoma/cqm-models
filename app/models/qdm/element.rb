module QDM
  # app/models/qdm/element.rb
  class Element < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :code
    field :display
    field :target
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
