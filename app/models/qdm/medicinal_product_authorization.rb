module QDM
  # app/models/qdm/medicinal_product_authorization.rb
  class MedicinalProductAuthorization < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :subject
    field :country
    field :jurisdiction
    field :status
    field :statusDate
    field :restoreDate
    field :validityPeriod
    field :dataExclusivityPeriod
    field :dateOfFirstAuthorization
    field :internationalBirthDate
    field :legalBasis
    field :jurisdictionalAuthorization
    field :holder
    field :regulator
    field :procedure
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
