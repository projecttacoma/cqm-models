module QDM
  # app/models/qdm/appointment.rb
  class Appointment < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :status
    field :cancelationReason
    field :serviceCategory
    field :serviceType
    field :specialty
    field :appointmentType
    field :reasonQDM::Code
    field :reasonReference
    field :priority
    field :description
    field :supportingInformation
    field :start
    field :end
    field :minutesDuration
    field :slot
    field :created
    field :comment
    field :patientInstruction
    field :basedOn
    field :participant
    field :requestedPeriod
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
