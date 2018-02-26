class QDM::ProcedurePerformed < QDM::DataElement
  include Mongoid::Document
  embedded_in :patient
  field :author_datetime, type: DateTime
  field :relevant_period, type: QDM::Interval
  field :reason, type: QDM::Code
  field :method, type: QDM::Code
  field :result
  field :status, type: QDM::Code
  field :anatomical_approach_site, type: QDM::Code
  field :anatomical_location_site, type: QDM::Code
  field :ordinality, type: QDM::Code
  field :incision_datetime, type: DateTime
  field :negation_rationale, type: QDM::Code
  field :components, type: Array
  field :hqmf_oid, type: String, default: '2.16.840.1.113883.10.20.28.3.67'
  field :category, type: String, default: 'procedure'
  field :status, type: String, default: 'performed'
  field :qdm_version, type: String, default: '5.3'
end
