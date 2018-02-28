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

var SymptomSchema = DataElement.extendSchema(DataElement.DataElementSchema, {
  prevalence_period: Interval,
  severity: Code,
  hqmf_oid: { type: String, default: "2.16.840.1.113883.10.20.28.3.116" },
  qrda_oid: { type: String, default: "2.16.840.1.113883.10.20.24.3.136" },
  category: { type: String, default: "symptom" },
  qdm_version: { type: String, default: "5.3" }
});

module.exports.SymptomSchema = SymptomSchema;
module.exports.Symptom = mongoose.model("Symptom", SymptomSchema);
