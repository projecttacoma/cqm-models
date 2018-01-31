var Schema = mongoose.Schema;
var Code = Schema.Types.Code;
var Interval = Schema.Types.Interval;
var Quantity = Schema.Types.Quantity;

var DiagnosticStudyRecommendedSchema = new Schema({
  author_datetime: DateTime,
  method: Code,
  negation_rationale: Code,
  hqmf_oid: { type: String, default: "2.16.840.1.113883.10.20.28.3.24" },
  category: { type: String, default: "diagnostic_study" },
  qdm_version: { type: String, default: "5.3" }
});

var DiagnosticStudyRecommended = mongoose.model("DiagnosticStudyRecommended", DiagnosticStudyRecommendedSchema);
