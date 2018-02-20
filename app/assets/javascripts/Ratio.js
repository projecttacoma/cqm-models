var Schema = mongoose.Schema;
var Code = Schema.Types.Code;
var Interval = Schema.Types.Interval;
var Quantity = Schema.Types.Quantity;
var Integer = Schema.Types.Integer;
var Array = Schema.Types.Array;
var String = Schema.Types.String;
var Float = Schema.Types.Float;
var Time = Schema.Types.Time;
var Datatype = require('./basetypes/Datatype');

var RatioSchema = Datatype.extendSchema(Datatype.DatatypeSchema,
  numerator: Quantity,
  denominator: Quantity,
  qdm_version: { type: String, default: "5.3" }
});

var Ratio = mongoose.model("Ratio", RatioSchema);
