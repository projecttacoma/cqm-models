const mongoose = require('mongoose');
const { DataElementSchema } = require('./basetypes/DataElement');
const Code = require('./basetypes/Code');
const Interval = require('./basetypes/Interval');
const Quantity = require('./basetypes/Quantity');
const DateTime = require('./basetypes/DateTime');
const { ComponentSchema } = require('./Component');
const { FacilityLocationSchema } = require('./FacilityLocation');
const { IdSchema } = require('./Id');
const Any = require('./basetypes/Any');

const [Number, String] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
];

const PatientCharacteristicClinicalTrialParticipantSchema = DataElementSchema({
  reason: Code,
  relevantPeriod: Interval,
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.3.6' },
  qrdaOid: { type: String, default: '2.16.840.1.113883.10.20.24.3.51' },
  qdmCategory: { type: String, default: 'patient_characteristic' },
  qdmStatus: { type: String, default: 'clinical_trial_participant' },
  qdmVersion: { type: String, default: '5.4' },
  _type: { type: String, default: 'PatientCharacteristicClinicalTrialParticipant' },

});

module.exports.PatientCharacteristicClinicalTrialParticipantSchema = PatientCharacteristicClinicalTrialParticipantSchema;
