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

const DeviceUseStatementSchema = DataElementSchema({
  identifier: Any,
  basedOn: Any,
  status: Any,
  subject: Any,
  derivedFrom: Any,
  timing: Any,
  recordedOn: Any,
  source: Any,
  device: Any,
  reasonCode: Any,
  reasonReference: Any,
  bodySite: Any,
  note: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'DeviceUseStatement' },

});

module.exports.DeviceUseStatementSchema = DeviceUseStatementSchema;
module.exports.DeviceUseStatement = mongoose.model('DeviceUseStatement', DeviceUseStatementSchema);
