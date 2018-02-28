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

var EncounterPerformedSchema = DataElement.extendSchema(DataElement.DataElementSchema, {
  author_datetime: Date,
  admission_source: Code,
  relevant_period: Interval,
  discharge_disposition: Code,
  facility_locations: [],
  diagnoses: [Code],
  principal_diagnosis: Code,
  negation_rationale: Code,
  length_of_stay: Quantity,
  hqmf_oid: { type: String, default: "2.16.840.1.113883.10.20.28.3.5" },
  category: { type: String, default: "encounter" },
  status: { type: String, default: "performed" },
  qdm_version: { type: String, default: "5.3" }
});

module.exports.EncounterPerformedSchema = EncounterPerformedSchema;
module.exports.EncounterPerformed = mongoose.model("EncounterPerformed", EncounterPerformedSchema);
