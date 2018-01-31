var Schema = mongoose.Schema;
var Code = Schema.Types.Code;
var Interval = Schema.Types.Interval;
var Quantity = Schema.Types.Quantity;

var PatientCharacteristicExpiredSchema = new Schema({
  expired_datetime: DateTime,
  cause: Code,
  hqmf_oid: { type: String, default: "2.16.840.1.113883.10.20.28.3.57" },
  category: { type: String, default: "condition" },
  qdm_version: { type: String, default: "5.3" }
});

var PatientCharacteristicExpired = mongoose.model("PatientCharacteristicExpired", PatientCharacteristicExpiredSchema);
