class QDM::PhysicalExamOrder
  include Mongoid::Document
  field :author_datetime, type: DateTime
  field :reason, type: QDM::Code
  field :method, type: QDM::Code
  field :anatomical_location_site, type: QDM::Code
  field :negation_rationale, type: QDM::Code
  field :hqmf_oid, type: String, default: '2.16.840.1.113883.10.20.28.3.61'
  field :category, type: String, default: 'physical_exam'
  field :qdm_version, type: String, default: '5.3'
end
