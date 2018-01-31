var Schema = mongoose.Schema;
var Code = Schema.Types.Code;
var Interval = Schema.Types.Interval;
var Quantity = Schema.Types.Quantity;

var AssessmentPerformedSchema = new Schema({
  author_datetime: DateTime,
  negation_rationale: Code,
  reason: Code,
  method: Code,
  result: {},
  components: Array,
  related_to: Array,
  hqmf_oid: { type: String, default: "2.16.840.1.113883.10.20.28.3.117" },
  category: { type: String, default: "assessment" },
  qdm_version: { type: String, default: "5.3" }
});

var AssessmentPerformed = mongoose.model("AssessmentPerformed", AssessmentPerformedSchema);
