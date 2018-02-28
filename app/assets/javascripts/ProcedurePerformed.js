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

var ProcedurePerformedSchema = DataElement.extendSchema(DataElement.DataElementSchema, {
  author_datetime: Date,
  relevant_period: Interval,
  reason: Code,
  method: Code,
  result: {},
  status: Code,
  anatomical_approach_site: Code,
  anatomical_location_site: Code,
  ordinality: Code,
  incision_datetime: Date,
  negation_rationale: Code,
  components: [],
  hqmf_oid: { type: String, default: "2.16.840.1.113883.10.20.28.3.67" },
  category: { type: String, default: "procedure" },
  status: { type: String, default: "performed" },
  qdm_version: { type: String, default: "5.3" }
});

module.exports.ProcedurePerformedSchema = ProcedurePerformedSchema;
module.exports.ProcedurePerformed = mongoose.model("ProcedurePerformed", ProcedurePerformedSchema);
