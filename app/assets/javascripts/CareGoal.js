const mongoose = require('mongoose');
const DataElement = require('./basetypes/DataElement');
const Code = require('./basetypes/Code');
const Interval = require('./basetypes/Interval');
const Quantity = require('./basetypes/Quantity');

const [Integer, Array, String, Float, Time] = [
  mongoose.Schema.Types.Integer,
  mongoose.Schema.Types.Array,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Float,
  mongoose.Schema.Types.Time,
];

const CareGoalSchema = DataElement.extendSchema(DataElement.DataElementSchema, {
  relevant_period: Interval,
  related_to: [String],
  target_outcome: {},
  hqmf_oid: { type: String, default: '2.16.840.1.113883.10.20.28.3.7' },
  category: { type: String, default: 'care_goal' },
  qdm_version: { type: String, default: '5.3' },

});

module.exports.CareGoalSchema = CareGoalSchema;
module.exports.CareGoal = mongoose.model('CareGoal', CareGoalSchema);
