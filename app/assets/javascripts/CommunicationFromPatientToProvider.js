var Schema = mongoose.Schema;
var Code = Schema.Types.Code;
var Interval = Schema.Types.Interval;
var Quantity = Schema.Types.Quantity;

var CommunicationFromPatientToProviderSchema = new Schema({
  author_datetime: DateTime,
  related_to: Array,
  negation_rationale: Code,
  hqmf_oid: { type: String, default: "2.16.840.1.113883.10.20.28.3.8" },
  category: { type: String, default: "communication" },
  status: { type: String, default: "from_patient_to_provider" },
  qdm_version: { type: String, default: "5.3" }
});

var CommunicationFromPatientToProvider = mongoose.model("CommunicationFromPatientToProvider", CommunicationFromPatientToProviderSchema);
