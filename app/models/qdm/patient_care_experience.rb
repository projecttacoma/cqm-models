class QDM::PatientCareExperience
  include Mongoid::Document
  field :author_datetime, type: DateTime
  field :hqmf_oid, type: String, default: '2.16.840.1.113883.10.20.28.3.52'
  field :category, type: String, default: 'care_experience'
  field :qdm_version, type: String, default: '5.3'
end
