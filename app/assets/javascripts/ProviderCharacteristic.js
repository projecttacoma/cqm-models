const mongoose = require('mongoose');
const DataElement = require('./basetypes/DataElement');
const Code = require('./basetypes/Code');
const Interval = require('./basetypes/Interval');
const Quantity = require('./basetypes/Quantity');

const [Number, String, Date] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Date,
];

const ProviderCharacteristicSchema = DataElement.extendSchema(DataElement.DataElementSchema, {
  author_datetime: Date,
  hqmf_oid: { type: String, default: '2.16.840.1.113883.10.20.28.3.71' },
  category: { type: String, default: 'provider_characteristic' },
  qdm_version: { type: String, default: '5.3' },

});

module.exports.ProviderCharacteristicSchema = ProviderCharacteristicSchema;
module.exports.ProviderCharacteristic = mongoose.model('ProviderCharacteristic', ProviderCharacteristicSchema);
