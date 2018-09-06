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

const MedicationActiveSchema = DataElementSchema({
  relevantPeriod: Interval,
  dosage: Quantity,
  frequency: Code,
  route: Code,
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.3.44' },
  category: { type: String, default: 'medication' },
  qdmStatus: { type: String, default: 'active' },
  qdmVersion: { type: String, default: '5.4' },
  _type: { type: String, default: 'MedicationActive' },

});

module.exports.MedicationActiveSchema = MedicationActiveSchema;
module.exports.MedicationActive = mongoose.model('MedicationActive', MedicationActiveSchema);
