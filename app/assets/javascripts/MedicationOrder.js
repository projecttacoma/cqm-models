var Schema = mongoose.Schema;
var Code = Schema.Types.Code;
var Interval = Schema.Types.Interval;
var Quantity = Schema.Types.Quantity;

var MedicationOrderSchema = new Schema({
  active_datetime: DateTime,
  relevant_period: Interval,
  author_datetime: DateTime,
  refills: Integer,
  dosage: Quantity,
  supply: Quantity,
  frequency: Code,
  route: Code,
  method: Code,
  reason: Code,
  negation_rationale: Code,
  hqmf_oid: { type: String, default: "2.16.840.1.113883.10.20.28.3.51" },
  category: { type: String, default: "medication" },
  qdm_version: { type: String, default: "5.3" }
});

var MedicationOrder = mongoose.model("MedicationOrder", MedicationOrderSchema);
