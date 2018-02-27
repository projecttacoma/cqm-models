const mongoose = require('mongoose');

var DataElement = require('./basetypes/DataElement');
var Schema = mongoose.Schema;
var Code = Schema.Types.Code;
var Interval = Schema.Types.Interval;
var Quantity = Schema.Types.Quantity;
var Integer = Schema.Types.Integer;
var Array = Schema.Types.Array;
var String = Schema.Types.String;
var Float = Schema.Types.Float;
var Time = Schema.Types.Time;

var PatientCharacteristicPayerSchema = DataElement.extendSchema(DataElement.DataElementSchema, {
  relevant_period: Interval,
  hqmf_oid: { type: String, default: "2.16.840.1.113883.10.20.28.3.58" },
  category: { type: String, default: "patient_characteristic" },
  status: { type: String, default: "payer" },
  qdm_version: { type: String, default: "5.3" }
});

module.exports = mongoose.model("PatientCharacteristicPayer", PatientCharacteristicPayerSchema);
