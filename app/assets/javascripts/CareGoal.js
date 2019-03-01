const mongoose = require('mongoose/browser');

const { IdSchema } = require('./Id');
const { DataElementSchema } = require('./basetypes/DataElement');
const Code = require('./basetypes/Code');
const Interval = require('./basetypes/Interval');
const Quantity = require('./basetypes/Quantity');
const DateTime = require('./basetypes/DateTime');
const Any = require('./basetypes/Any');
const { ComponentSchema } = require('./attributes/Component');
const { FacilityLocationSchema } = require('./attributes/FacilityLocation');



const [Number, String] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
];

const CareGoalSchema = DataElementSchema({
  relevantPeriod: Interval,
  relatedTo: [IdSchema],
  targetOutcome: Any,
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.3.7' },
  qdmCategory: { type: String, default: 'care_goal' },
  qdmVersion: { type: String, default: '5.4' },
  _type: { type: String, default: 'CareGoal' },

});

module.exports.CareGoalSchema = CareGoalSchema;
class CareGoal extends mongoose.Document {
  constructor(object) {
    super(object, CareGoalSchema);
  }
}
module.exports.CareGoal = CareGoal;
