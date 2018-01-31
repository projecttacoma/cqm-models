var Schema = mongoose.Schema;
var Code = Schema.Types.Code;
var Interval = Schema.Types.Interval;
var Quantity = Schema.Types.Quantity;

var ResultComponentSchema = new Schema({
  reference_range: Interval,
  qdm_version: { type: String, default: "5.3" }
});

var ResultComponent = mongoose.model("ResultComponent", ResultComponentSchema);
