class QDM::PatientCharacteristicClinicalTrialParticipant < QDM::Datatype
  include Mongoid::Document
  field :reason, type: QDM::Code
  field :relevant_period, type: QDM::Interval
  field :hqmf_oid, type: String, default: '2.16.840.1.113883.10.20.28.3.6'
  field :qrda_oid, type: String, default: '2.16.840.1.113883.10.20.24.3.51'
  field :category, type: String, default: 'condition'
  field :status, type: String, default: 'clinical_trial_participant'
  field :qdm_version, type: String, default: '5.3'
end
