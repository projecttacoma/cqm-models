class QDM::DeviceApplied
  include Mongoid::Document
  field :author_datetime, type: DateTime
  field :relevant_period, type: QDM::Interval
  field :negation_rationale, type: QDM::Code
  field :reason, type: QDM::Code
  field :anatomical_location_site, type: QDM::Code
  field :anatomical_approach_site, type: QDM::Code
  field :hqmf_oid, type: String, default: '2.16.840.1.113883.10.20.28.3.13'
  field :category, type: String, default: 'device'
  field :qdm_version, type: String, default: '5.3'
end
