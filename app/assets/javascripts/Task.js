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

const TaskSchema = DataElementSchema({
  identifier: Any,
  instantiatesCanonical: Any,
  instantiatesUri: Any,
  basedOn: Any,
  groupIdentifier: Any,
  partOf: Any,
  status: Any,
  statusReason: Any,
  businessStatus: Any,
  intent: Any,
  priority: Any,
  code: Any,
  description: Any,
  focus: Any,
  for: Any,
  encounter: Any,
  executionPeriod: Any,
  authoredOn: Any,
  lastModified: Any,
  requester: Any,
  performerType: Any,
  owner: Any,
  location: Any,
  reasonCode: Any,
  reasonReference: Any,
  insurance: Any,
  note: Any,
  relevantHistory: Any,
  restriction: Any,
  input: Any,
  output: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'Task' },

});

module.exports.TaskSchema = TaskSchema;
module.exports.Task = mongoose.model('Task', TaskSchema);
