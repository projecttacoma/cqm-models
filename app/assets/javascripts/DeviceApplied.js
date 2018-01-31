var Schema = mongoose.Schema;
var Code = Schema.Types.Code;
var Interval = Schema.Types.Interval;
var Quantity = Schema.Types.Quantity;

var DeviceAppliedSchema = new Schema({
  author_datetime: DateTime,
  relevant_period: Interval,
  negation_rationale: Code,
  reason: Code,
  anatomical_location_site: Code,
  anatomical_approach_site: Code,
  hqmf_oid: { type: String, default: "2.16.840.1.113883.10.20.28.3.13" },
  category: { type: String, default: "device" },
  qdm_version: { type: String, default: "5.3" }
});

var DeviceApplied = mongoose.model("DeviceApplied", DeviceAppliedSchema);
