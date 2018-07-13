module QDM
  # app/models/qdm/diagnostic_study_recommended.rb
  class DiagnosticStudyRecommended < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :authorDatetime, type: DateTime
    field :method, type: QDM::Code
    field :negationRationale, type: QDM::Code
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.3.24'
    field :qrdaOid, type: String, default: '2.16.840.1.113883.10.20.24.3.19'
    field :category, type: String, default: 'diagnostic_study'
    field :qdmStatus, type: String, default: 'recommended'
    field :qdmVersion, type: String, default: '5.3'
  end
end
