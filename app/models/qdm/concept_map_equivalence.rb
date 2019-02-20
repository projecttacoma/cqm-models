module QDM
  # app/models/qdm/concept_map_equivalence.rb
  class ConceptMapEquivalence < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
