const mongoose = require('mongoose/browser');
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

const MedicationDischargeSchema = DataElementSchema({
  authorDatetime: DateTime,
  refills: Number,
  dosage: Quantity,
  supply: Quantity,
  frequency: Code,
  daysSupplied: Number,
  route: Code,
  negationRationale: Code,
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.3.48' },
  qdmCategory: { type: String, default: 'medication' },
  qdmStatus: { type: String, default: 'discharge' },
  qdmVersion: { type: String, default: '5.4' },
  _type: { type: String, default: 'MedicationDischarge' },

});

module.exports.MedicationDischargeSchema = MedicationDischargeSchema;
module.exports.MedicationDischarge = mongoose.model('MedicationDischarge', MedicationDischargeSchema);
