module QDM
  # app/models/qdm/medicinal_product_indication.rb
  class MedicinalProductIndication < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :subject
    field :diseaseSymptomProcedure
    field :diseaseStatus
    field :comorbidity
    field :intendedEffect
    field :duration
    field :otherTherapy
    field :undesirableEffect
    field :population
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
