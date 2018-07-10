const mongoose = require('mongoose');
const { DataElementSchema } = require('./basetypes/DataElement');
const Code = require('./basetypes/Code');
const Interval = require('./basetypes/Interval');
const Quantity = require('./basetypes/Quantity');
const DateTime = require('./basetypes/DateTime');
const { ComponentSchema } = require('./Component');
const { FacilityLocationSchema } = require('./FacilityLocation');
const Any = require('./basetypes/Any');

const [Number, String] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
];

const EncounterPerformedSchema = DataElementSchema({
  authorDatetime: DateTime,
  admissionSource: Code,
  relevantPeriod: Interval,
  dischargeDisposition: Code,
  facilityLocations: [FacilityLocationSchema],
  diagnoses: [],
  principalDiagnosis: Code,
  negationRationale: Code,
  lengthOfStay: Quantity,
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.3.5' },
  category: { type: String, default: 'encounter' },
  qdmStatus: { type: String, default: 'performed' },
  qdmVersion: { type: String, default: '5.3' },
  _type: { type: String, default: 'EncounterPerformed' },

});

module.exports.EncounterPerformedSchema = EncounterPerformedSchema;
module.exports.EncounterPerformed = mongoose.model('EncounterPerformed', EncounterPerformedSchema);
