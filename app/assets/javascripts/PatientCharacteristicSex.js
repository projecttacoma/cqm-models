var Schema = mongoose.Schema;
var Code = Schema.Types.Code;
var Interval = Schema.Types.Interval;
var Quantity = Schema.Types.Quantity;

var PatientCharacteristicSexSchema = new Schema({
  qdm_version: { type: String, default: "5.3" }
});

var PatientCharacteristicSex = mongoose.model("PatientCharacteristicSex", PatientCharacteristicSexSchema);
