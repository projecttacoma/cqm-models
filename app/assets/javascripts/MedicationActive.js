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

const MedicationActiveSchema = DataElementSchema({
  relevant_period: Interval,
  dosage: Quantity,
  supply: Quantity,
  frequency: Code,
  route: Code,
  hqmf_oid: { type: String, default: '2.16.840.1.113883.10.20.28.3.44' },
  category: { type: String, default: 'medication' },
  qdm_status: { type: String, default: 'active' },
  qdm_version: { type: String, default: '5.3' },
  _type: { type: String, default: 'MedicationActive' },

});

module.exports.MedicationActiveSchema = MedicationActiveSchema;
module.exports.MedicationActive = mongoose.model('MedicationActive', MedicationActiveSchema);
