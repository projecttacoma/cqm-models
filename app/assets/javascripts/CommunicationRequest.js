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

const CommunicationRequestSchema = DataElementSchema({
  identifier: Any,
  basedOn: Any,
  replaces: Any,
  groupIdentifier: Any,
  status: Any,
  statusReason: Any,
  category: Any,
  priority: Any,
  doNotPerform: Any,
  medium: Any,
  subject: Any,
  about: Any,
  encounter: Any,
  payload: Any,
  occurrence: Any,
  authoredOn: Any,
  requester: Any,
  recipient: Any,
  sender: Any,
  reasonCode: Any,
  reasonReference: Any,
  note: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'CommunicationRequest' },

});

module.exports.CommunicationRequestSchema = CommunicationRequestSchema;
module.exports.CommunicationRequest = mongoose.model('CommunicationRequest', CommunicationRequestSchema);
