module QDM
  # app/models/qdm/medication_statement.rb
  class MedicationStatement < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :basedOn
    field :partOf
    field :status
    field :statusReason
    field :category
    field :medication
    field :subject
    field :context
    field :effective
    field :dateAsserted
    field :informationSource
    field :derivedFrom
    field :reasonQDM::Code
    field :reasonReference
    field :note
    field :dosage
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
