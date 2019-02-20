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

const PackageItemSchema = DataElementSchema({
  identifier: Any,
  type: Any,
  quantity: Any,
  material: Any,
  alternateMaterial: Any,
  device: Any,
  manufacturedItem: Any,
  packageItem: Any,
  physicalCharacteristics: Any,
  otherCharacteristics: Any,
  shelfLifeStorage: Any,
  manufacturer: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'PackageItem' },

});

module.exports.PackageItemSchema = PackageItemSchema;
module.exports.PackageItem = mongoose.model('PackageItem', PackageItemSchema);
