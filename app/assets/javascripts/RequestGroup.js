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

const RequestGroupSchema = DataElementSchema({
  identifier: Any,
  instantiatesCanonical: Any,
  instantiatesUri: Any,
  basedOn: Any,
  replaces: Any,
  groupIdentifier: Any,
  status: Any,
  intent: Any,
  priority: Any,
  code: Any,
  subject: Any,
  context: Any,
  authoredOn: Any,
  author: Any,
  reasonCode: Any,
  reasonReference: Any,
  note: Any,
  action: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'RequestGroup' },

});

module.exports.RequestGroupSchema = RequestGroupSchema;
module.exports.RequestGroup = mongoose.model('RequestGroup', RequestGroupSchema);
