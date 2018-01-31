var Schema = mongoose.Schema;
var Code = Schema.Types.Code;
var Interval = Schema.Types.Interval;
var Quantity = Schema.Types.Quantity;

var ImmunizationOrderSchema = new Schema({
  active_datetime: DateTime,
  author_datetime: DateTime,
  dosage: Quantity,
  supply: Quantity,
  reason: Code,
  route: Code,
  negation_rationale: Code,
  hqmf_oid: { type: String, default: "2.16.840.1.113883.10.20.28.3.113" },
  category: { type: String, default: "immunization" },
  qdm_version: { type: String, default: "5.3" }
});

var ImmunizationOrder = mongoose.model("ImmunizationOrder", ImmunizationOrderSchema);
