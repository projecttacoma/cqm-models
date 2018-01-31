var Schema = mongoose.Schema;
var Code = Schema.Types.Code;
var Interval = Schema.Types.Interval;
var Quantity = Schema.Types.Quantity;

var EncounterPerformedSchema = new Schema({
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
  qdm_version: { type: String, default: "5.3" }
});

var EncounterPerformed = mongoose.model("EncounterPerformed", EncounterPerformedSchema);
