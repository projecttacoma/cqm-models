module QDM
  # app/models/qdm/diagnostic_study_performed.rb
  class DiagnosticStudyPerformed < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :author_datetime, type: DateTime
    field :relevant_period, type: QDM::Interval
    field :reason, type: QDM::Code
    field :result
    field :result_datetime, type: DateTime
    field :status, type: QDM::Code
    field :method, type: QDM::Code
    field :facility_location, type: QDM::Code
    field :negation_rationale, type: QDM::Code
    field :components, type: Array
    field :hqmf_oid, type: String, default: '2.16.840.1.113883.10.20.28.3.23'
    field :category, type: String, default: 'diagnostic_study'
    field :qdm_status, type: String, default: 'performed'
    field :qdm_version, type: String, default: '5.3'
    field :class_name, type: String, default: 'DiagnosticStudyPerformed'
  end
end
