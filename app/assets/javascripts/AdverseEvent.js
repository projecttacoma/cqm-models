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

var AdverseEventSchema = DataElement.extendSchema(DataElement.DataElementSchema, {
  author_datetime: DateTime,
  relevant_period: Interval,
  severity: Code,
  facility_location: Code,
  type: Code,
  hqmf_oid: { type: String, default: "2.16.840.1.113883.10.20.28.3.120" },
  category: { type: String, default: "adverse_event" },
  qdm_version: { type: String, default: "5.3" }
});

var AdverseEvent = mongoose.model("AdverseEvent", AdverseEventSchema);
