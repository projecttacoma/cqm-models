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

var MedicationAdministeredSchema = DataElement.extendSchema(DataElement.DataElementSchema, {
  author_datetime: Date,
  relevant_period: Interval,
  dosage: Quantity,
  supply: Quantity,
  frequency: Code,
  route: Code,
  reason: Code,
  negation_rationale: Code,
  hqmf_oid: { type: String, default: "2.16.840.1.113883.10.20.28.3.45" },
  category: { type: String, default: "medication" },
  status: { type: String, default: "administered" },
  qdm_version: { type: String, default: "5.3" }
});

module.exports.MedicationAdministeredSchema = MedicationAdministeredSchema;
module.exports.MedicationAdministered = mongoose.model("MedicationAdministered", MedicationAdministeredSchema);
