var Schema = mongoose.Schema;
var Code = Schema.Types.Code;
var Interval = Schema.Types.Interval;
var Quantity = Schema.Types.Quantity;

var PatientCharacteristicRaceSchema = new Schema({
  hqmf_oid: { type: String, default: "2.16.840.1.113883.10.20.28.3.59" },
  category: { type: String, default: "patient_characteristic" },
  status: { type: String, default: "race" },
  qdm_version: { type: String, default: "5.3" }
});

var PatientCharacteristicRace = mongoose.model("PatientCharacteristicRace", PatientCharacteristicRaceSchema);
