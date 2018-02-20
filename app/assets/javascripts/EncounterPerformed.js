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

var EncounterPerformedSchema = Datatype.extendSchema(Datatype.DatatypeSchema,
  author_datetime: DateTime,
  admission_source: Code,
  relevant_period: Interval,
  discharge_disposition: Code,
  facility_locations: Array,
  diagnoses: Array,
  principal_diagnosis: Code,
  negation_rationale: Code,
  length_of_stay: Quantity,
  hqmf_oid: { type: String, default: "2.16.840.1.113883.10.20.28.3.5" },
  category: { type: String, default: "encounter" },
  status: { type: String, default: "performed" },
  qdm_version: { type: String, default: "5.3" }
});

var EncounterPerformed = mongoose.model("EncounterPerformed", EncounterPerformedSchema);
