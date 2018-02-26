var Schema = mongoose.Schema;
var Code = Schema.Types.Code;
var Interval = Schema.Types.Interval;
var Quantity = Schema.Types.Quantity;
var Integer = Schema.Types.Integer;
var Array = Schema.Types.Array;
var String = Schema.Types.String;
var Float = Schema.Types.Float;
var Time = Schema.Types.Time;
var Datatype = require('./basetypes/Datatype');

var SubstanceAdministeredSchema = Datatype.extendSchema(Datatype.DatatypeSchema, {
  author_datetime: DateTime,
  relevant_period: Interval,
  dosage: Quantity,
  supply: Quantity,
  frequency: Code,
  route: Code,
  negation_rationale: Code,
  hqmf_oid: { type: String, default: "2.16.840.1.113883.10.20.28.3.73" },
  category: { type: String, default: "substance" },
  status: { type: String, default: "administered" },
  qdm_version: { type: String, default: "5.3" }
});

var SubstanceAdministered = mongoose.model("SubstanceAdministered", SubstanceAdministeredSchema);
