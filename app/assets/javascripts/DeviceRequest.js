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

const DeviceRequestSchema = DataElementSchema({
  identifier: Any,
  instantiatesCanonical: Any,
  instantiatesUri: Any,
  basedOn: Any,
  priorRequest: Any,
  groupIdentifier: Any,
  status: Any,
  intent: Any,
  priority: Any,
  code: Any,
  parameter: Any,
  subject: Any,
  encounter: Any,
  occurrence: Any,
  authoredOn: Any,
  requester: Any,
  performerType: Any,
  performer: Any,
  reasonCode: Any,
  reasonReference: Any,
  insurance: Any,
  supportingInfo: Any,
  note: Any,
  relevantHistory: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'DeviceRequest' },

});

module.exports.DeviceRequestSchema = DeviceRequestSchema;
module.exports.DeviceRequest = mongoose.model('DeviceRequest', DeviceRequestSchema);
