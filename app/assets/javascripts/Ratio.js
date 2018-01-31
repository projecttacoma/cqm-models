var Schema = mongoose.Schema;
var Code = Schema.Types.Code;
var Interval = Schema.Types.Interval;
var Quantity = Schema.Types.Quantity;

var RatioSchema = new Schema({
  numerator: Quantity,
  denominator: Quantity,
  qdm_version: { type: String, default: "5.3" }
});

var Ratio = mongoose.model("Ratio", RatioSchema);
