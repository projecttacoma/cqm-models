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

var LaboratoryTestPerformedSchema = DataElement.extendSchema(DataElement.DataElementSchema, {
  author_datetime: Date,
  relevant_period: Interval,
  status: Code,
  method: Code,
  result: {},
  result_datetime: Date,
  reason: Code,
  reference_range: Interval,
  negation_rationale: Code,
  components: [],
  hqmf_oid: { type: String, default: "2.16.840.1.113883.10.20.28.3.42" },
  category: { type: String, default: "laboratory_test" },
  status: { type: String, default: "performed" },
  qdm_version: { type: String, default: "5.3" }
});

module.exports.LaboratoryTestPerformedSchema = LaboratoryTestPerformedSchema;
module.exports.LaboratoryTestPerformed = mongoose.model("LaboratoryTestPerformed", LaboratoryTestPerformedSchema);
