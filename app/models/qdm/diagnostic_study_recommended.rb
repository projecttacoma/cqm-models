class QDM::DiagnosticStudyRecommended
  include Mongoid::Document
  field :author_datetime, type: DateTime
  field :method, type: QDM::Code
  field :negation_rationale, type: QDM::Code
  field :hqmf_oid, type: String, default: '2.16.840.1.113883.10.20.28.3.24'
  field :category, type: String, default: 'diagnostic_study'
  field :qdm_version, type: String, default: '5.3'
end
