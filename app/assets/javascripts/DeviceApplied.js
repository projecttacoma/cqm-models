const mongoose = require('mongoose');
const DataElement = require('./basetypes/DataElement');
const Code = require('./basetypes/Code');
const Interval = require('./basetypes/Interval');
const Quantity = require('./basetypes/Quantity');

const [Number, String, Date] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Date,
];

const DeviceAppliedSchema = DataElement.extendSchema(DataElement.DataElementSchema, {
  author_datetime: Date,
  relevant_period: Interval,
  negation_rationale: Code,
  reason: Code,
  anatomical_location_site: Code,
  anatomical_approach_site: Code,
  hqmf_oid: { type: String, default: '2.16.840.1.113883.10.20.28.3.13' },
  category: { type: String, default: 'device' },
  qdm_status: { type: String, default: 'applied' },
  qdm_version: { type: String, default: '5.3' },

});

module.exports.DeviceAppliedSchema = DeviceAppliedSchema;
module.exports.DeviceApplied = mongoose.model('DeviceApplied', DeviceAppliedSchema);
