var Schema = mongoose.Schema;
var Code = Schema.Types.Code;
var Interval = Schema.Types.Interval;
var Quantity = Schema.Types.Quantity;

var InterventionPerformedSchema = new Schema({
  author_datetime: DateTime,
  relevant_period: Interval,
  reason: Code,
  result: {},
  status: Code,
  negation_rationale: Code,
  hqmf_oid: { type: String, default: "2.16.840.1.113883.10.20.28.3.36" },
  category: { type: String, default: "intervention" },
  status: { type: String, default: "performed" },
  qdm_version: { type: String, default: "5.3" }
});

var InterventionPerformed = mongoose.model("InterventionPerformed", InterventionPerformedSchema);
