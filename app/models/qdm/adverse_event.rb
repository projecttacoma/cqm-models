module QDM
  # app/models/qdm/adverse_event.rb
  class AdverseEvent < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :actuality
    field :category
    field :event
    field :subject
    field :encounter
    field :date
    field :detected
    field :recordedDate
    field :resultingCondition
    field :location
    field :seriousness
    field :severity
    field :outcome
    field :recorder
    field :contributor
    field :suspectEntity
    field :subjectMedicalHistory
    field :referenceDocument
    field :study
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.3.120'
    field :qdmCategory, type: String, default: 'adverse_event'
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
