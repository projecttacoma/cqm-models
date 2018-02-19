var Schema = mongoose.Schema;
var Code = Schema.Types.Code;
var Interval = Schema.Types.Interval;
var Quantity = Schema.Types.Quantity;

var LaboratoryTestPerformedSchema = new Schema({
  author_datetime: DateTime,
  relevant_period: Interval,
  status: Code,
  method: Code,
  result: {},
  result_datetime: DateTime,
  reason: Code,
  reference_range: Interval,
  negation_rationale: Code,
  components: Array,
  hqmf_oid: { type: String, default: "2.16.840.1.113883.10.20.28.3.42" },
  category: { type: String, default: "laboratory_test" },
  status: { type: String, default: "performed" },
  qdm_version: { type: String, default: "5.3" }
});

var LaboratoryTestPerformed = mongoose.model("LaboratoryTestPerformed", LaboratoryTestPerformedSchema);
