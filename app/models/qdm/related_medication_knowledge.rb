module QDM
  # app/models/qdm/related_medication_knowledge.rb
  class RelatedMedicationKnowledge < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :type
    field :reference
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
