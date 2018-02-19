var Schema = mongoose.Schema;
var Code = Schema.Types.Code;
var Interval = Schema.Types.Interval;
var Quantity = Schema.Types.Quantity;

var DiagnosticStudyPerformedSchema = new Schema({
  author_datetime: DateTime,
  relevant_period: Interval,
  reason: Code,
  result: {},
  result_datetime: DateTime,
  status: Code,
  method: Code,
  facility_location: Code,
  negation_rationale: Code,
  components: Array,
  hqmf_oid: { type: String, default: "2.16.840.1.113883.10.20.28.3.23" },
  category: { type: String, default: "diagnostic_study" },
  status: { type: String, default: "performed" },
  qdm_version: { type: String, default: "5.3" }
});

var DiagnosticStudyPerformed = mongoose.model("DiagnosticStudyPerformed", DiagnosticStudyPerformedSchema);
