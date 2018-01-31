var Schema = mongoose.Schema;
var Code = Schema.Types.Code;
var Interval = Schema.Types.Interval;
var Quantity = Schema.Types.Quantity;

var ProviderCharacteristicSchema = new Schema({
  author_datetime: DateTime,
  hqmf_oid: { type: String, default: "2.16.840.1.113883.10.20.28.3.71" },
  category: { type: String, default: "provider_characteristic" },
  qdm_version: { type: String, default: "5.3" }
});

var ProviderCharacteristic = mongoose.model("ProviderCharacteristic", ProviderCharacteristicSchema);
