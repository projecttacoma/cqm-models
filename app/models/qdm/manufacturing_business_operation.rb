module QDM
  # app/models/qdm/manufacturing_business_operation.rb
  class ManufacturingBusinessOperation < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :operationType
    field :authorisationReferenceNumber
    field :effectiveDate
    field :confidentialityIndicator
    field :manufacturer
    field :regulator
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
