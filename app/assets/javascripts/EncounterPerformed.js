const mongoose = require('mongoose/browser');

const { IdSchema } = require('./Id');
const { DataElementSchema } = require('./basetypes/DataElement');
const Code = require('./basetypes/Code');
const Interval = require('./basetypes/Interval');
const Quantity = require('./basetypes/Quantity');
const DateTime = require('./basetypes/DateTime');
const Any = require('./basetypes/Any');
const { ComponentSchema } = require('./attributes/Component');
const { FacilityLocationSchema } = require('./attributes/FacilityLocation');


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
  diagnoses: [Code],
  principalDiagnosis: Code,
  negationRationale: Code,
  lengthOfStay: Quantity,
  qdmTitle: { type: String, default: 'Encounter, Performed' },
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.4.5' },
  qdmCategory: { type: String, default: 'encounter' },
  qdmStatus: { type: String, default: 'performed' },
  hqmfTitle: { type: String, default: 'Encounter, Performed' },
  qdmVersion: { type: String, default: '5.4' },
  _type: { type: String, default: 'EncounterPerformed' },

});

module.exports.EncounterPerformedSchema = EncounterPerformedSchema;
class EncounterPerformed extends mongoose.Document {
  constructor(object) {
    super(object, EncounterPerformedSchema);
  }
}
module.exports.EncounterPerformed = EncounterPerformed;
