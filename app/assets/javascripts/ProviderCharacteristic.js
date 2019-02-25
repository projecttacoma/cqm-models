const mongoose = require('mongoose/browser');
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

const ProviderCharacteristicSchema = DataElementSchema({
  authorDatetime: DateTime,
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.3.71' },
  qdmCategory: { type: String, default: 'provider_characteristic' },
  qdmVersion: { type: String, default: '5.4' },
  _type: { type: String, default: 'ProviderCharacteristic' },

});

module.exports.ProviderCharacteristicSchema = ProviderCharacteristicSchema;
class ProviderCharacteristic extends mongoose.Document {
  constructor(object) {
    super(object, ProviderCharacteristicSchema);
  }
}
module.exports.ProviderCharacteristic = ProviderCharacteristic;
