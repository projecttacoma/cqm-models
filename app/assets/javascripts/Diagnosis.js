var Schema = mongoose.Schema;
var Code = Schema.Types.Code;
var Interval = Schema.Types.Interval;
var Quantity = Schema.Types.Quantity;

var DiagnosisSchema = new Schema({
  author_datetime: DateTime,
  prevalence_period: Interval,
  anatomical_location_site: Code,
  severity: Code,
  hqmf_oid: { type: String, default: "2.16.840.1.113883.10.20.28.3.110" },
  qrda_oid: { type: String, default: "2.16.840.1.113883.10.20.24.3.135" },
  category: { type: String, default: "condition" },
  qdm_version: { type: String, default: "5.3" }
});

var Diagnosis = mongoose.model("Diagnosis", DiagnosisSchema);
