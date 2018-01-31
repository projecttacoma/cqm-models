var Schema = mongoose.Schema;
var Code = Schema.Types.Code;
var Interval = Schema.Types.Interval;
var Quantity = Schema.Types.Quantity;

var IdSchema = new Schema({
  naming_system: String,
  value: String,
  qdm_version: { type: String, default: "5.3" }
});

var Id = mongoose.model("Id", IdSchema);
