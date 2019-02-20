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

const DeviceDefinitionSchema = DataElementSchema({
  identifier: Any,
  udiDeviceIdentifier: Any,
  manufacturer: Any,
  deviceName: Any,
  modelNumber: Any,
  type: Any,
  specialization: Any,
  version: Any,
  safety: Any,
  shelfLifeStorage: Any,
  physicalCharacteristics: Any,
  languageCode: Any,
  capability: Any,
  property: Any,
  owner: Any,
  contact: Any,
  url: Any,
  onlineInformation: Any,
  note: Any,
  quantity: Any,
  parentDevice: Any,
  material: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'DeviceDefinition' },

});

module.exports.DeviceDefinitionSchema = DeviceDefinitionSchema;
module.exports.DeviceDefinition = mongoose.model('DeviceDefinition', DeviceDefinitionSchema);
