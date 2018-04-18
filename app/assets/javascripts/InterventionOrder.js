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

const InterventionOrderSchema = DataElementSchema({
  author_datetime: DateTime,
  reason: Code,
  negation_rationale: Code,
  hqmf_oid: { type: String, default: '2.16.840.1.113883.10.20.28.3.35' },
  category: { type: String, default: 'intervention' },
  qdm_status: { type: String, default: 'order' },
  qdm_version: { type: String, default: '5.3' },
  _type: { type: String, default: 'InterventionOrder' },

});

module.exports.InterventionOrderSchema = InterventionOrderSchema;
module.exports.InterventionOrder = mongoose.model('InterventionOrder', InterventionOrderSchema);
