const mongoose = require('mongoose');

var DataElement = require('./basetypes/DataElement');
var Schema = mongoose.Schema;
var Code = require('./basetypes/Code');
var Interval = require('./basetypes/Interval');
var Quantity = require('./basetypes/Quantity');
var Integer = Schema.Types.Integer;
var Array = Schema.Types.Array;
var String = Schema.Types.String;
var Float = Schema.Types.Float;
var Time = Schema.Types.Time;

var PatientCharacteristicClinicalTrialParticipantSchema = DataElement.extendSchema(DataElement.DataElementSchema, {
  reason: Code,
  relevant_period: Interval,
  hqmf_oid: { type: String, default: "2.16.840.1.113883.10.20.28.3.6" },
  qrda_oid: { type: String, default: "2.16.840.1.113883.10.20.24.3.51" },
  category: { type: String, default: "condition" },
  status: { type: String, default: "clinical_trial_participant" },
  qdm_version: { type: String, default: "5.3" }
});

module.exports.PatientCharacteristicClinicalTrialParticipantSchema = PatientCharacteristicClinicalTrialParticipantSchema;
module.exports.PatientCharacteristicClinicalTrialParticipant = mongoose.model("PatientCharacteristicClinicalTrialParticipant", PatientCharacteristicClinicalTrialParticipantSchema);
