class QDM::Symptom < QDM::Datatype
  include Mongoid::Document
  field :prevalence_period, type: QDM::Interval
  field :severity, type: QDM::Code
  field :hqmf_oid, type: String, default: '2.16.840.1.113883.10.20.28.3.116'
  field :qrda_oid, type: String, default: '2.16.840.1.113883.10.20.24.3.136'
  field :category, type: String, default: 'symptom'
  field :qdm_version, type: String, default: '5.3'
end
