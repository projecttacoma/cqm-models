const mongoose = require('mongoose');

var DataElement = require('./basetypes/DataElement');
var Schema = mongoose.Schema;
var Code = require('./basetypes/Code');
var Interval = require('./basetypes/Interval');
var Quantity = require('./basetypes/Quantity');
var Integer = Schema.Types.Integer;
var Array = Schema.Types.Array;
var String = Schema.Types.String;
var Float = Schema.Types.Float;
var Time = Schema.Types.Time;

var ProviderCharacteristicSchema = DataElement.extendSchema(DataElement.DataElementSchema, {
  author_datetime: Date,
  hqmf_oid: { type: String, default: "2.16.840.1.113883.10.20.28.3.71" },
  category: { type: String, default: "provider_characteristic" },
  qdm_version: { type: String, default: "5.3" }
});

module.exports.ProviderCharacteristicSchema = ProviderCharacteristicSchema;
module.exports.ProviderCharacteristic = mongoose.model("ProviderCharacteristic", ProviderCharacteristicSchema);
