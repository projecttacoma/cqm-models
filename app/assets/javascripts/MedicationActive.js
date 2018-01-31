var Schema = mongoose.Schema;
var Code = Schema.Types.Code;
var Interval = Schema.Types.Interval;
var Quantity = Schema.Types.Quantity;

var MedicationActiveSchema = new Schema({
  relevant_period: Interval,
  dosage: Quantity,
  supply: Quantity,
  frequency: Code,
  route: Code,
  hqmf_oid: { type: String, default: "2.16.840.1.113883.10.20.28.3.44" },
  category: { type: String, default: "medication" },
  qdm_version: { type: String, default: "5.3" }
});

var MedicationActive = mongoose.model("MedicationActive", MedicationActiveSchema);
