var Schema = mongoose.Schema;
var Code = Schema.Types.Code;
var Interval = Schema.Types.Interval;
var Quantity = Schema.Types.Quantity;

var DeviceRecommendedSchema = new Schema({
  author_datetime: DateTime,
  negation_rationale: Code,
  reason: Code,
  hqmf_oid: { type: String, default: "2.16.840.1.113883.10.20.28.3.16" },
  category: { type: String, default: "device" },
  qdm_version: { type: String, default: "5.3" }
});

var DeviceRecommended = mongoose.model("DeviceRecommended", DeviceRecommendedSchema);
