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

const DeviceSchema = DataElementSchema({
  identifier: Any,
  definition: Any,
  udiCarrier: Any,
  status: Any,
  statusReason: Any,
  distinctIdentifier: Any,
  manufacturer: Any,
  manufactureDate: Any,
  expirationDate: Any,
  lotNumber: Any,
  serialNumber: Any,
  deviceName: Any,
  modelNumber: Any,
  partNumber: Any,
  type: Any,
  specialization: Any,
  version: Any,
  property: Any,
  patient: Any,
  owner: Any,
  contact: Any,
  location: Any,
  url: Any,
  note: Any,
  safety: Any,
  parent: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'Device' },

});

module.exports.DeviceSchema = DeviceSchema;
module.exports.Device = mongoose.model('Device', DeviceSchema);
