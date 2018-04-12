module QDM
  # app/models/qdm/patient_characteristic_clinical_trial_participant.rb
  class PatientCharacteristicClinicalTrialParticipant < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :reason, type: QDM::Code
    field :relevantPeriod, type: QDM::Interval
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.3.6'
    field :qrdaOid, type: String, default: '2.16.840.1.113883.10.20.24.3.51'
    field :category, type: String, default: 'condition'
    field :qdmStatus, type: String, default: 'clinical_trial_participant'
    field :qdmVersion, type: String, default: '5.3'
  end
end
