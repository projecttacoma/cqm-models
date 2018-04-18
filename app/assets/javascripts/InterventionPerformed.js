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

const InterventionPerformedSchema = DataElementSchema({
  author_datetime: DateTime,
  relevant_period: Interval,
  reason: Code,
  result: {},
  status: Code,
  negation_rationale: Code,
  hqmf_oid: { type: String, default: '2.16.840.1.113883.10.20.28.3.36' },
  category: { type: String, default: 'intervention' },
  qdm_status: { type: String, default: 'performed' },
  qdm_version: { type: String, default: '5.3' },
  _type: { type: String, default: 'InterventionPerformed' },

});

module.exports.InterventionPerformedSchema = InterventionPerformedSchema;
module.exports.InterventionPerformed = mongoose.model('InterventionPerformed', InterventionPerformedSchema);
