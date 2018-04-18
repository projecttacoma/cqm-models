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

const MedicationOrderSchema = DataElementSchema({
  active_datetime: DateTime,
  relevant_period: Interval,
  author_datetime: DateTime,
  refills: Number,
  dosage: Quantity,
  supply: Quantity,
  frequency: Code,
  route: Code,
  method: Code,
  reason: Code,
  negation_rationale: Code,
  hqmf_oid: { type: String, default: '2.16.840.1.113883.10.20.28.3.51' },
  category: { type: String, default: 'medication' },
  qdm_status: { type: String, default: 'order' },
  qdm_version: { type: String, default: '5.3' },
  _type: { type: String, default: 'MedicationOrder' },

});

module.exports.MedicationOrderSchema = MedicationOrderSchema;
module.exports.MedicationOrder = mongoose.model('MedicationOrder', MedicationOrderSchema);
