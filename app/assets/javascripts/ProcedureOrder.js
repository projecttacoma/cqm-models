var Schema = mongoose.Schema;
var Code = Schema.Types.Code;
var Interval = Schema.Types.Interval;
var Quantity = Schema.Types.Quantity;

var ProcedureOrderSchema = new Schema({
  author_datetime: DateTime,
  reason: Code,
  method: Code,
  anatomical_approach_site: Code,
  anatomical_location_site: Code,
  ordinality: Code,
  negation_rationale: Code,
  hqmf_oid: { type: String, default: "2.16.840.1.113883.10.20.28.3.66" },
  category: { type: String, default: "procedure" },
  qdm_version: { type: String, default: "5.3" }
});

var ProcedureOrder = mongoose.model("ProcedureOrder", ProcedureOrderSchema);
