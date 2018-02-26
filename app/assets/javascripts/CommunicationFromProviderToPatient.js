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

var CommunicationFromProviderToPatientSchema = Datatype.extendSchema(Datatype.DatatypeSchema, {
  author_datetime: DateTime,
  related_to: Array,
  negation_rationale: Code,
  hqmf_oid: { type: String, default: "2.16.840.1.113883.10.20.28.3.9" },
  category: { type: String, default: "communication" },
  status: { type: String, default: "from_provider_to_patient" },
  qdm_version: { type: String, default: "5.3" }
});

var CommunicationFromProviderToPatient = mongoose.model("CommunicationFromProviderToPatient", CommunicationFromProviderToPatientSchema);
