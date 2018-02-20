class QDM::Diagnosis < QDM::Datatype
  include Mongoid::Document
  field :author_datetime, type: DateTime
  field :prevalence_period, type: QDM::Interval
  field :anatomical_location_site, type: QDM::Code
  field :severity, type: QDM::Code
  field :hqmf_oid, type: String, default: '2.16.840.1.113883.10.20.28.3.110'
  field :qrda_oid, type: String, default: '2.16.840.1.113883.10.20.24.3.135'
  field :category, type: String, default: 'condition'
  field :qdm_version, type: String, default: '5.3'
end
