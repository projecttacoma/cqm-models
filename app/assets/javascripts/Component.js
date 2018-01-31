var Schema = mongoose.Schema;
var Code = Schema.Types.Code;
var Interval = Schema.Types.Interval;
var Quantity = Schema.Types.Quantity;

var ComponentSchema = new Schema({
  code: Code,
  result: {},
  qdm_version: { type: String, default: "5.3" }
});

var Component = mongoose.model("Component", ComponentSchema);
