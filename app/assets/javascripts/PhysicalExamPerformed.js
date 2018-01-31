var Schema = mongoose.Schema;
var Code = Schema.Types.Code;
var Interval = Schema.Types.Interval;
var Quantity = Schema.Types.Quantity;

var PhysicalExamPerformedSchema = new Schema({
  author_datetime: DateTime,
  relevant_period: Interval,
  reason: Code,
  method: Code,
  result: {},
  anatomical_location_site: Code,
  negation_rationale: Code,
  components: Array,
  hqmf_oid: { type: String, default: "2.16.840.1.113883.10.20.28.3.62" },
  category: { type: String, default: "physical_exam" },
  qdm_version: { type: String, default: "5.3" }
});

var PhysicalExamPerformed = mongoose.model("PhysicalExamPerformed", PhysicalExamPerformedSchema);
