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

const PatientCharacteristicExpiredSchema = DataElement.extendSchema(DataElement.DataElementSchema, {
  expired_datetime: Date,
  cause: Code,
  hqmf_oid: { type: String, default: '2.16.840.1.113883.10.20.28.3.57' },
  category: { type: String, default: 'condition' },
  qdm_version: { type: String, default: '5.3' },
  class_name: { type: String, default: 'PatientCharacteristicExpired' },

});

module.exports.PatientCharacteristicExpiredSchema = PatientCharacteristicExpiredSchema;
module.exports.PatientCharacteristicExpired = mongoose.model('PatientCharacteristicExpired', PatientCharacteristicExpiredSchema);
