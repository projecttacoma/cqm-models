var Schema = mongoose.Schema;
var Code = Schema.Types.Code;
var Interval = Schema.Types.Interval;
var Quantity = Schema.Types.Quantity;

var PhysicalExamOrderSchema = new Schema({
  author_datetime: DateTime,
  reason: Code,
  method: Code,
  anatomical_location_site: Code,
  negation_rationale: Code,
  hqmf_oid: { type: String, default: "2.16.840.1.113883.10.20.28.3.61" },
  category: { type: String, default: "physical_exam" },
  status: { type: String, default: "order" },
  qdm_version: { type: String, default: "5.3" }
});

var PhysicalExamOrder = mongoose.model("PhysicalExamOrder", PhysicalExamOrderSchema);
