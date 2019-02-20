module QDM
  # app/models/qdm/practitioner_role.rb
  class PractitionerRole < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :active
    field :period
    field :practitioner
    field :organization
    field :code
    field :specialty
    field :location
    field :healthcareService
    field :telecom
    field :availableTime
    field :notAvailable
    field :availabilityExceptions
    field :endpoint
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
