const mongoose = require('mongoose');
const { DataElementSchema } = require('./basetypes/DataElement');
const Code = require('./basetypes/Code');
const Interval = require('./basetypes/Interval');
const Quantity = require('./basetypes/Quantity');
const DateTime = require('./basetypes/DateTime');

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
  route: Code,
  negationRationale: Code,
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.3.48' },
  category: { type: String, default: 'medication' },
  qdmStatus: { type: String, default: 'discharge' },
  qdmVersion: { type: String, default: '5.3' },
  _type: { type: String, default: 'MedicationDischarge' },

});

module.exports.MedicationDischargeSchema = MedicationDischargeSchema;
module.exports.MedicationDischarge = mongoose.model('MedicationDischarge', MedicationDischargeSchema);
