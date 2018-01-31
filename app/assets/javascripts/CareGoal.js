var Schema = mongoose.Schema;
var Code = Schema.Types.Code;
var Interval = Schema.Types.Interval;
var Quantity = Schema.Types.Quantity;

var CareGoalSchema = new Schema({
  relevant_period: Interval,
  related_to: Array,
  target_outcome: {},
  hqmf_oid: { type: String, default: "2.16.840.1.113883.10.20.28.3.7" },
  category: { type: String, default: "care_goal" },
  qdm_version: { type: String, default: "5.3" }
});

var CareGoal = mongoose.model("CareGoal", CareGoalSchema);
