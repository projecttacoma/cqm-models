var Schema = mongoose.Schema;
var Code = Schema.Types.Code;
var Interval = Schema.Types.Interval;
var Quantity = Schema.Types.Quantity;

var PatientCharacteristicClinicalTrialParticipantSchema = new Schema({
  reason: Code,
  relevant_period: Interval,
  hqmf_oid: { type: String, default: "2.16.840.1.113883.10.20.28.3.6" },
  qrda_oid: { type: String, default: "2.16.840.1.113883.10.20.24.3.51" },
  category: { type: String, default: "condition" },
  status: { type: String, default: "clinical_trial_participant" },
  qdm_version: { type: String, default: "5.3" }
});

var PatientCharacteristicClinicalTrialParticipant = mongoose.model("PatientCharacteristicClinicalTrialParticipant", PatientCharacteristicClinicalTrialParticipantSchema);
