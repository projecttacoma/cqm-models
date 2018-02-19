var Schema = mongoose.Schema;
var Code = Schema.Types.Code;
var Interval = Schema.Types.Interval;
var Quantity = Schema.Types.Quantity;

var InterventionRecommendedSchema = new Schema({
  author_datetime: DateTime,
  reason: Code,
  negation_rationale: Code,
  hqmf_oid: { type: String, default: "2.16.840.1.113883.10.20.28.3.37" },
  category: { type: String, default: "intervention" },
  status: { type: String, default: "recommended" },
  qdm_version: { type: String, default: "5.3" }
});

var InterventionRecommended = mongoose.model("InterventionRecommended", InterventionRecommendedSchema);
