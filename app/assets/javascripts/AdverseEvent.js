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

const AdverseEventSchema = DataElement.extendSchema(DataElement.DataElementSchema, {
  author_datetime: Date,
  relevant_period: Interval,
  severity: Code,
  facility_location: Code,
  type: Code,
  hqmf_oid: { type: String, default: '2.16.840.1.113883.10.20.28.3.120' },
  category: { type: String, default: 'adverse_event' },
  qdm_version: { type: String, default: '5.3' },

});

module.exports.AdverseEventSchema = AdverseEventSchema;
module.exports.AdverseEvent = mongoose.model('AdverseEvent', AdverseEventSchema);
