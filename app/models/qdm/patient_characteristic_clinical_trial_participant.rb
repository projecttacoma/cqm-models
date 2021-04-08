module QDM
  # app/models/qdm/patient_characteristic_clinical_trial_participant.rb
  class PatientCharacteristicClinicalTrialParticipant < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :reason, type: QDM::Code
    field :relevantPeriod, type: QDM::Interval
    field :qdmTitle, type: String, default: 'Patient Characteristic Clinical Trial Participant'
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.4.6'
    field :qrdaOid, type: String, default: '2.16.840.1.113883.10.20.24.3.51'
    field :qdmCategory, type: String, default: 'patient_characteristic'
    field :qdmStatus, type: String, default: 'clinical_trial_participant'
    field :qdmVersion, type: String, default: '5.6'
  end
end
