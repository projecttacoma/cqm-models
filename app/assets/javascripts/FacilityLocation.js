var Schema = mongoose.Schema;
var Code = Schema.Types.Code;
var Interval = Schema.Types.Interval;
var Quantity = Schema.Types.Quantity;

var FacilityLocationSchema = new Schema({
  code: Code,
  location_period: Interval,
  qdm_version: { type: String, default: "5.3" }
});

var FacilityLocation = mongoose.model("FacilityLocation", FacilityLocationSchema);
