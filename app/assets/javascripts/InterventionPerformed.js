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

const InterventionPerformedSchema = DataElement.extendSchema(DataElement.DataElementSchema, {
  author_datetime: Date,
  relevant_period: Interval,
  reason: Code,
  result: {},
  status: Code,
  negation_rationale: Code,
  hqmf_oid: { type: String, default: '2.16.840.1.113883.10.20.28.3.36' },
  category: { type: String, default: 'intervention' },
  qdm_status: { type: String, default: 'performed' },
  qdm_version: { type: String, default: '5.3' },

});

module.exports.InterventionPerformedSchema = InterventionPerformedSchema;
module.exports.InterventionPerformed = mongoose.model('InterventionPerformed', InterventionPerformedSchema);
