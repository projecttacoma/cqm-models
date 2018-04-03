module QDM
  # app/models/qdm/diagnostic_study_recommended.rb
  class DiagnosticStudyRecommended < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :author_datetime, type: DateTime
    field :method, type: QDM::Code
    field :negation_rationale, type: QDM::Code
    field :hqmf_oid, type: String, default: '2.16.840.1.113883.10.20.28.3.24'
    field :qrda_oid, type: String, default: '2.16.840.1.113883.10.20.24.3.19'
    field :category, type: String, default: 'diagnostic_study'
    field :qdm_status, type: String, default: 'recommended'
    field :qdm_version, type: String, default: '5.3'
    field :class_name, type: String, default: 'DiagnosticStudyRecommended'
  end
end
