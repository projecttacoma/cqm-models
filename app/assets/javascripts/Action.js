const mongoose = require('mongoose');
const { DataElementSchema } = require('./basetypes/DataElement');
const Code = require('./basetypes/Code');
const Interval = require('./basetypes/Interval');
const Quantity = require('./basetypes/Quantity');
const DateTime = require('./basetypes/DateTime');
const { ComponentSchema } = require('./Component');
const { FacilityLocationSchema } = require('./FacilityLocation');
const { IdSchema } = require('./Id');
const Any = require('./basetypes/Any');

const [Number, String] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
];

const ActionSchema = DataElementSchema({
  prefix: Any,
  title: Any,
  description: Any,
  textEquivalent: Any,
  priority: Any,
  code: Any,
  reason: Any,
  documentation: Any,
  goalId: Any,
  subject: Any,
  trigger: Any,
  condition: Any,
  input: Any,
  output: Any,
  relatedAction: Any,
  timing: Any,
  participant: Any,
  type: Any,
  groupingBehavior: Any,
  selectionBehavior: Any,
  requiredBehavior: Any,
  precheckBehavior: Any,
  cardinalityBehavior: Any,
  definition: Any,
  transform: Any,
  dynamicValue: Any,
  action: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'Action' },

});

module.exports.ActionSchema = ActionSchema;
module.exports.Action = mongoose.model('Action', ActionSchema);
