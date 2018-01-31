var Schema = mongoose.Schema;
var Code = Schema.Types.Code;
var Interval = Schema.Types.Interval;
var Quantity = Schema.Types.Quantity;

var MedicationDispensedSchema = new Schema({
  author_datetime: DateTime,
  relevant_period: Interval,
  refills: Integer,
  dosage: Quantity,
  supply: Quantity,
  frequency: Code,
  route: Code,
  negation_rationale: Code,
  hqmf_oid: { type: String, default: "2.16.840.1.113883.10.20.28.3.49" },
  category: { type: String, default: "medication" },
  qdm_version: { type: String, default: "5.3" }
});

var MedicationDispensed = mongoose.model("MedicationDispensed", MedicationDispensedSchema);
