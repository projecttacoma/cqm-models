var Schema = mongoose.Schema;
var Code = Schema.Types.Code;
var Interval = Schema.Types.Interval;
var Quantity = Schema.Types.Quantity;

var PatientCharacteristicBirthdateSchema = new Schema({
  birth_datetime: DateTime,
  hqmf_oid: { type: String, default: "2.16.840.1.113883.10.20.28.3.54" },
  category: { type: String, default: "patient_characteristic" },
  qdm_version: { type: String, default: "5.3" }
});

var PatientCharacteristicBirthdate = mongoose.model("PatientCharacteristicBirthdate", PatientCharacteristicBirthdateSchema);
