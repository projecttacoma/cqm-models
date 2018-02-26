var Schema = mongoose.Schema;
var Code = Schema.Types.Code;
var Interval = Schema.Types.Interval;
var Quantity = Schema.Types.Quantity;
var Integer = Schema.Types.Integer;
var Array = Schema.Types.Array;
var String = Schema.Types.String;
var Float = Schema.Types.Float;
var Time = Schema.Types.Time;
var DataElement = require('./basetypes/DataElement');

var DeviceAppliedSchema = DataElement.extendSchema(DataElement.DataElementSchema, {
  author_datetime: DateTime,
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

var DeviceApplied = mongoose.model("DeviceApplied", DeviceAppliedSchema);
