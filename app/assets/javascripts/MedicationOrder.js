const mongoose = require('mongoose');
const DataElement = require('./basetypes/DataElement');
const Code = require('./basetypes/Code');
const Interval = require('./basetypes/Interval');
const Quantity = require('./basetypes/Quantity');

const [Integer, Array, String, Float, Time] = [
  mongoose.Schema.Types.Integer,
  mongoose.Schema.Types.Array,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Float,
  mongoose.Schema.Types.Time,
];

const MedicationOrderSchema = DataElement.extendSchema(DataElement.DataElementSchema, {
  active_datetime: Date,
  relevant_period: Interval,
  author_datetime: Date,
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

});

module.exports.MedicationOrderSchema = MedicationOrderSchema;
module.exports.MedicationOrder = mongoose.model('MedicationOrder', MedicationOrderSchema);
