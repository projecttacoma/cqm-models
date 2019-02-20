module QDM
  # app/models/qdm/medication_request.rb
  class MedicationRequest < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :status
    field :statusReason
    field :intent
    field :category
    field :priority
    field :doNotPerform
    field :reported
    field :medication
    field :subject
    field :encounter
    field :supportingInformation
    field :authoredOn
    field :requester
    field :performer
    field :performerType
    field :recorder
    field :reasonQDM::Code
    field :reasonReference
    field :instantiatesCanonical
    field :instantiatesUri
    field :basedOn
    field :groupIdentifier
    field :courseOfTherapyType
    field :insurance
    field :note
    field :dosageInstruction
    field :dispenseRequest
    field :substitution
    field :priorPrescription
    field :detectedIssue
    field :eventHistory
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
