class QDM::AdverseEvent < QDM::DataElement
  include Mongoid::Document
  embedded_in :patient
  field :author_datetime, type: DateTime
  field :relevant_period, type: QDM::Interval
  field :severity, type: QDM::Code
  field :facility_location, type: QDM::Code
  field :type, type: QDM::Code
  field :hqmf_oid, type: String, default: '2.16.840.1.113883.10.20.28.3.120'
  field :category, type: String, default: 'adverse_event'
  field :qdm_version, type: String, default: '5.3'
end
