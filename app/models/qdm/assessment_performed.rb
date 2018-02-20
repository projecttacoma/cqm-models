class QDM::AssessmentPerformed < QDM::Datatype
  include Mongoid::Document
  field :author_datetime, type: DateTime
  field :negation_rationale, type: QDM::Code
  field :reason, type: QDM::Code
  field :method, type: QDM::Code
  field :result
  field :components, type: Array
  field :related_to, type: Array
  field :hqmf_oid, type: String, default: '2.16.840.1.113883.10.20.28.3.117'
  field :category, type: String, default: 'assessment'
  field :status, type: String, default: 'performed'
  field :qdm_version, type: String, default: '5.3'
end
