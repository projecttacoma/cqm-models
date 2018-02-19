class QDM::EncounterPerformed
  include Mongoid::Document
  field :author_datetime, type: DateTime
  field :admission_source, type: QDM::Code
  field :relevant_period, type: QDM::Interval
  field :discharge_disposition, type: QDM::Code
  field :facility_locations, type: Array
  field :diagnoses, type: Array
  field :principal_diagnosis, type: QDM::Code
  field :negation_rationale, type: QDM::Code
  field :length_of_stay, type: QDM::Quantity
  field :hqmf_oid, type: String, default: '2.16.840.1.113883.10.20.28.3.5'
  field :category, type: String, default: 'encounter'
  field :status, type: String, default: 'performed'
  field :qdm_version, type: String, default: '5.3'
end
