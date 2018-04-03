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

const AdverseEventSchema = DataElement.extendSchema(DataElement.DataElementSchema, {
  author_datetime: Date,
  relevant_period: Interval,
  severity: Code,
  facility_location: Code,
  type: Code,
  hqmf_oid: { type: String, default: '2.16.840.1.113883.10.20.28.3.120' },
  category: { type: String, default: 'adverse_event' },
  qdm_version: { type: String, default: '5.3' },
  class_name: { type: String, default: 'AdverseEvent' },

});

module.exports.AdverseEventSchema = AdverseEventSchema;
module.exports.AdverseEvent = mongoose.model('AdverseEvent', AdverseEventSchema);
