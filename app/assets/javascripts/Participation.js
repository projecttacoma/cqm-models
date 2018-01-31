var Schema = mongoose.Schema;
var Code = Schema.Types.Code;
var Interval = Schema.Types.Interval;
var Quantity = Schema.Types.Quantity;

var ParticipationSchema = new Schema({
  participation_period: Interval,
  qdm_version: { type: String, default: "5.3" }
});

var Participation = mongoose.model("Participation", ParticipationSchema);
