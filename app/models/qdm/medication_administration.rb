module QDM
  # app/models/qdm/medication_administration.rb
  class MedicationAdministration < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :instantiates
    field :partOf
    field :status
    field :statusReason
    field :category
    field :medication
    field :subject
    field :context
    field :supportingInformation
    field :effective
    field :performer
    field :reasonQDM::Code
    field :reasonReference
    field :request
    field :device
    field :note
    field :dosage
    field :eventHistory
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
