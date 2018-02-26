var Schema = mongoose.Schema;
var Code = Schema.Types.Code;
var Interval = Schema.Types.Interval;
var Quantity = Schema.Types.Quantity;
var Integer = Schema.Types.Integer;
var Array = Schema.Types.Array;
var String = Schema.Types.String;
var Float = Schema.Types.Float;
var Time = Schema.Types.Time;
var DataElement = require('./basetypes/DataElement');

var LaboratoryTestRecommendedSchema = DataElement.extendSchema(DataElement.DataElementSchema, {
  author_datetime: DateTime,
  method: Code,
  reason: Code,
  negation_rationale: Code,
  hqmf_oid: { type: String, default: "2.16.840.1.113883.10.20.28.3.43" },
  category: { type: String, default: "laboratory_test" },
  status: { type: String, default: "recommended" },
  qdm_version: { type: String, default: "5.3" }
});

var LaboratoryTestRecommended = mongoose.model("LaboratoryTestRecommended", LaboratoryTestRecommendedSchema);
