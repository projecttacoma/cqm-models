module QDM
  # app/models/qdm/healthcare_service.rb
  class HealthcareService < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :active
    field :providedBy
    field :category
    field :type
    field :specialty
    field :location
    field :name
    field :comment
    field :extraDetails
    field :photo
    field :telecom
    field :coverageArea
    field :serviceProvisionQDM::Code
    field :eligibility
    field :program
    field :characteristic
    field :communication
    field :referralMethod
    field :appointmentRequired
    field :availableTime
    field :notAvailable
    field :availabilityExceptions
    field :endpoint
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
