module QDM
  # app/models/qdm/assessment_recommended.rb
  class AssessmentRecommended < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :authorDatetime, type: DateTime
    field :negationRationale, type: Mixed
    field :reason, type: Mixed
    field :method, type: Mixed
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.3.118'
    field :category, type: String, default: 'assessment'
    field :qdmStatus, type: String, default: 'recommended'
    field :qdmVersion, type: String, default: '5.3'
  end
end
