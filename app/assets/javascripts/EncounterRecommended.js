var Schema = mongoose.Schema;
var Code = Schema.Types.Code;
var Interval = Schema.Types.Interval;
var Quantity = Schema.Types.Quantity;

var EncounterRecommendedSchema = new Schema({
  author_datetime: DateTime,
  reason: Code,
  facility_location: Code,
  negation_rationale: Code,
  hqmf_oid: { type: String, default: "2.16.840.1.113883.10.20.28.3.28" },
  category: { type: String, default: "encounter" },
  qdm_version: { type: String, default: "5.3" }
});

var EncounterRecommended = mongoose.model("EncounterRecommended", EncounterRecommendedSchema);
