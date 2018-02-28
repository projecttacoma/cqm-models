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

var PhysicalExamPerformedSchema = DataElement.extendSchema(DataElement.DataElementSchema, {
  author_datetime: Date,
  relevant_period: Interval,
  reason: Code,
  method: Code,
  result: {},
  anatomical_location_site: Code,
  negation_rationale: Code,
  components: Array,
  hqmf_oid: { type: String, default: "2.16.840.1.113883.10.20.28.3.62" },
  category: { type: String, default: "physical_exam" },
  status: { type: String, default: "performed" },
  qdm_version: { type: String, default: "5.3" }
});

module.exports = mongoose.model("PhysicalExamPerformed", PhysicalExamPerformedSchema);
