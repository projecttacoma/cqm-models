module QDM
  # app/models/qdm/appointment_response.rb
  class AppointmentResponse < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :appointment
    field :start
    field :end
    field :participantType
    field :actor
    field :participantStatus
    field :comment
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
