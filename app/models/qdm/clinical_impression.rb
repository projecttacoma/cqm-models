module QDM
  # app/models/qdm/clinical_impression.rb
  class ClinicalImpression < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :status
    field :statusReason
    field :code
    field :description
    field :subject
    field :encounter
    field :effective
    field :date
    field :assessor
    field :previous
    field :problem
    field :investigation
    field :protocol
    field :summary
    field :finding
    field :prognosisQDM::CodeableConcept
    field :prognosisReference
    field :supportingInfo
    field :note
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
