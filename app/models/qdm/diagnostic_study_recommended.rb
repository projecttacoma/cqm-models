module QDM
  # app/models/qdm/diagnostic_study_recommended.rb
  class DiagnosticStudyRecommended < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :authorDatetime, type: DateTime
    field :negationRationale, type: QDM::Code
    embeds_many :requester, class_name: 'QDM::Entity'
    field :qdmTitle, type: String, default: 'Diagnostic Study, Recommended'
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.4.24'
    field :qrdaOid, type: String, default: '2.16.840.1.113883.10.20.24.3.19'
    field :qdmCategory, type: String, default: 'diagnostic_study'
    field :qdmStatus, type: String, default: 'recommended'
    field :qdmVersion, type: String, default: '5.6'
  end
end
