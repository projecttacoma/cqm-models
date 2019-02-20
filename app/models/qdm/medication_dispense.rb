module QDM
  # app/models/qdm/medication_dispense.rb
  class MedicationDispense < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :partOf
    field :status
    field :statusReason
    field :category
    field :medication
    field :subject
    field :context
    field :supportingInformation
    field :performer
    field :location
    field :authorizingPrescription
    field :type
    field :quantity
    field :daysSupply
    field :whenPrepared
    field :whenHandedOver
    field :destination
    field :receiver
    field :note
    field :dosageInstruction
    field :substitution
    field :detectedIssue
    field :eventHistory
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
