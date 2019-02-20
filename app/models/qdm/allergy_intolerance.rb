module QDM
  # app/models/qdm/allergy_intolerance.rb
  class AllergyIntolerance < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :clinicalStatus
    field :verificationStatus
    field :type
    field :category
    field :criticality
    field :code
    field :patient
    field :encounter
    field :onset
    field :recordedDate
    field :recorder
    field :asserter
    field :lastOccurrence
    field :note
    field :reaction
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.3.119'
    field :qdmCategory, type: String, default: 'allergy'
    field :qdmStatus, type: String, default: 'intolerance'
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
