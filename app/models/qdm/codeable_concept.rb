module QDM
  # app/models/qdm/codeable_concept.rb
  class CodeableConcept < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :coding
    field :text
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
