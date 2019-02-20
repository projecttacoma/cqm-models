module QDM
  # app/models/qdm/medicinal_product_undesirable_effect.rb
  class MedicinalProductUndesirableEffect < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :subject
    field :symptomConditionEffect
    field :classification
    field :frequencyOfOccurrence
    field :population
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
