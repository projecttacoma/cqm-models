var Schema = mongoose.Schema;
var Code = Schema.Types.Code;
var Interval = Schema.Types.Interval;
var Quantity = Schema.Types.Quantity;

var PatientCharacteristicPayerSchema = new Schema({
  relevant_period: Interval,
  hqmf_oid: { type: String, default: "2.16.840.1.113883.10.20.28.3.58" },
  category: { type: String, default: "patient_characteristic" },
  qdm_version: { type: String, default: "5.3" }
});

var PatientCharacteristicPayer = mongoose.model("PatientCharacteristicPayer", PatientCharacteristicPayerSchema);
