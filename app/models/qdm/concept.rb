module QDM
  # app/models/qdm/concept.rb
  class Concept < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :code
    field :display
    field :definition
    field :designation
    field :property
    field :concept
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
