var Schema = mongoose.Schema;
var Code = Schema.Types.Code;
var Interval = Schema.Types.Interval;
var Quantity = Schema.Types.Quantity;

var SymptomSchema = new Schema({
  prevalence_period: Interval,
  severity: Code,
  hqmf_oid: { type: String, default: "2.16.840.1.113883.10.20.28.3.116" },
  category: { type: String, default: "symptom" },
  qdm_version: { type: String, default: "5.3" }
});

var Symptom = mongoose.model("Symptom", SymptomSchema);
