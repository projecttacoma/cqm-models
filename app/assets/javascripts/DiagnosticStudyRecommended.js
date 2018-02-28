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

var DiagnosticStudyRecommendedSchema = DataElement.extendSchema(DataElement.DataElementSchema, {
  author_datetime: Date,
  method: Code,
  negation_rationale: Code,
  hqmf_oid: { type: String, default: "2.16.840.1.113883.10.20.28.3.24" },
  qrda_oid: { type: String, default: "2.16.840.1.113883.10.20.24.3.19" },
  category: { type: String, default: "diagnostic_study" },
  status: { type: String, default: "recommended" },
  qdm_version: { type: String, default: "5.3" }
});

module.exports.DiagnosticStudyRecommendedSchema = DiagnosticStudyRecommendedSchema;
module.exports.DiagnosticStudyRecommended = mongoose.model("DiagnosticStudyRecommended", DiagnosticStudyRecommendedSchema);
