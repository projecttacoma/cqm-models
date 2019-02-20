module QDM
  # app/models/qdm/medicinal_product.rb
  class MedicinalProduct < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :type
    field :domain
    field :combinedPharmaceuticalDoseForm
    field :legalStatusOfSupply
    field :additionalMonitoringIndicator
    field :specialMeasures
    field :paediatricUseIndicator
    field :productClassification
    field :marketingStatus
    field :pharmaceuticalProduct
    field :packagedMedicinalProduct
    field :attachedDocument
    field :masterFile
    field :contact
    field :clinicalTrial
    field :name
    field :crossReference
    field :manufacturingBusinessOperation
    field :specialDesignation
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
