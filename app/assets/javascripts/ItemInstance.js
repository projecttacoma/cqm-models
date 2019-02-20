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

const ItemInstanceSchema = DataElementSchema({
  count: Any,
  location: Any,
  subject: Any,
  manufactureDate: Any,
  expiryDate: Any,
  currentSWVersion: Any,
  lotNumber: Any,
  serialNumber: Any,
  carrierAIDC: Any,
  carrierHRF: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'ItemInstance' },

});

module.exports.ItemInstanceSchema = ItemInstanceSchema;
module.exports.ItemInstance = mongoose.model('ItemInstance', ItemInstanceSchema);
