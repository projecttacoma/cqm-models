var Schema = mongoose.Schema;
var Code = Schema.Types.Code;
var Interval = Schema.Types.Interval;
var Quantity = Schema.Types.Quantity;

var SubstanceRecommendedSchema = new Schema({
  author_datetime: DateTime,
  reason: Code,
  dosage: Quantity,
  supply: Quantity,
  frequency: Code,
  method: Code,
  refills: Integer,
  route: Code,
  negation_rationale: Code,
  hqmf_oid: { type: String, default: "2.16.840.1.113883.10.20.28.3.78" },
  category: { type: String, default: "substance" },
  qdm_version: { type: String, default: "5.3" }
});

var SubstanceRecommended = mongoose.model("SubstanceRecommended", SubstanceRecommendedSchema);
