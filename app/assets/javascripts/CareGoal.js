const mongoose = require('mongoose');
const { DataElementSchema } = require('./basetypes/DataElement');
const Code = require('./basetypes/Code');
const Interval = require('./basetypes/Interval');
const Quantity = require('./basetypes/Quantity');
const DateTime = require('./basetypes/DateTime');
const { ComponentSchema } = require('./Component');
const { FacilityLocationSchema } = require('./FacilityLocation');
const Any = require('./basetypes/Any');

const [Number, String] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
];

const CareGoalSchema = DataElementSchema({
  relevantPeriod: Interval,
  relatedTo: [String],
  targetOutcome: Any,
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.3.7' },
  category: { type: String, default: 'care_goal' },
  qdmVersion: { type: String, default: '5.3' },
  _type: { type: String, default: 'CareGoal' },

});

module.exports.CareGoalSchema = CareGoalSchema;
module.exports.CareGoal = mongoose.model('CareGoal', CareGoalSchema);
