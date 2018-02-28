const mongoose = require('mongoose');

var DataElement = require('./basetypes/DataElement');
var Schema = mongoose.Schema;
var Code = require('./basetypes/Code');
var Interval = require('./basetypes/Interval');
var Quantity = require('./basetypes/Quantity');
var Integer = Schema.Types.Integer;
var Array = Schema.Types.Array;
var String = Schema.Types.String;
var Float = Schema.Types.Float;
var Time = Schema.Types.Time;

var DeviceAppliedSchema = DataElement.extendSchema(DataElement.DataElementSchema, {
  author_datetime: Date,
  relevant_period: Interval,
  negation_rationale: Code,
  reason: Code,
  anatomical_location_site: Code,
  anatomical_approach_site: Code,
  hqmf_oid: { type: String, default: "2.16.840.1.113883.10.20.28.3.13" },
  category: { type: String, default: "device" },
  status: { type: String, default: "applied" },
  qdm_version: { type: String, default: "5.3" }
});

module.exports.DeviceAppliedSchema = DeviceAppliedSchema;
module.exports.DeviceApplied = mongoose.model("DeviceApplied", DeviceAppliedSchema);
