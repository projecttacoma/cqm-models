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

const DeviceAppliedSchema = DataElementSchema({
  author_datetime: DateTime,
  relevant_period: Interval,
  negation_rationale: Code,
  reason: Code,
  anatomical_location_site: Code,
  anatomical_approach_site: Code,
  hqmf_oid: { type: String, default: '2.16.840.1.113883.10.20.28.3.13' },
  category: { type: String, default: 'device' },
  qdm_status: { type: String, default: 'applied' },
  qdm_version: { type: String, default: '5.3' },
  _type: { type: String, default: 'DeviceApplied' },

});

module.exports.DeviceAppliedSchema = DeviceAppliedSchema;
module.exports.DeviceApplied = mongoose.model('DeviceApplied', DeviceAppliedSchema);
