var Schema = mongoose.Schema;
var Code = Schema.Types.Code;
var Interval = Schema.Types.Interval;
var Quantity = Schema.Types.Quantity;

var ProcedurePerformedSchema = new Schema({
  author_datetime: DateTime,
  relevant_period: Interval,
  reason: Code,
  method: Code,
  result: {},
  status: Code,
  anatomical_approach_site: Code,
  anatomical_location_site: Code,
  ordinality: Code,
  incision_datetime: DateTime,
  negation_rationale: Code,
  components: Array,
  hqmf_oid: { type: String, default: "2.16.840.1.113883.10.20.28.3.67" },
  category: { type: String, default: "procedure" },
  status: { type: String, default: "performed" },
  qdm_version: { type: String, default: "5.3" }
});

var ProcedurePerformed = mongoose.model("ProcedurePerformed", ProcedurePerformedSchema);
