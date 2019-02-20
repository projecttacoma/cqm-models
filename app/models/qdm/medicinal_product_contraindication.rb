module QDM
  # app/models/qdm/medicinal_product_contraindication.rb
  class MedicinalProductContraindication < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :subject
    field :disease
    field :diseaseStatus
    field :comorbidity
    field :therapeuticIndication
    field :otherTherapy
    field :population
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
