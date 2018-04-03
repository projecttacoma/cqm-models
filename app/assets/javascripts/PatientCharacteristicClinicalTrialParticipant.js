const mongoose = require('mongoose');
const DataElement = require('./basetypes/DataElement');
const Code = require('./basetypes/Code');
const Interval = require('./basetypes/Interval');
const Quantity = require('./basetypes/Quantity');

const [Number, String, Date] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Date,
];

const PatientCharacteristicClinicalTrialParticipantSchema = DataElement.extendSchema(DataElement.DataElementSchema, {
  reason: Code,
  relevant_period: Interval,
  hqmf_oid: { type: String, default: '2.16.840.1.113883.10.20.28.3.6' },
  qrda_oid: { type: String, default: '2.16.840.1.113883.10.20.24.3.51' },
  category: { type: String, default: 'condition' },
  qdm_status: { type: String, default: 'clinical_trial_participant' },
  qdm_version: { type: String, default: '5.3' },
  class_name: { type: String, default: 'PatientCharacteristicClinicalTrialParticipant' },

});

module.exports.PatientCharacteristicClinicalTrialParticipantSchema = PatientCharacteristicClinicalTrialParticipantSchema;
module.exports.PatientCharacteristicClinicalTrialParticipant = mongoose.model('PatientCharacteristicClinicalTrialParticipant', PatientCharacteristicClinicalTrialParticipantSchema);
