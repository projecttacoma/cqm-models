const mongoose = require('mongoose');
const { DataElementSchema } = require('./basetypes/DataElement');
const Code = require('./basetypes/Code');
const Interval = require('./basetypes/Interval');
const Quantity = require('./basetypes/Quantity');
const DateTime = require('./basetypes/DateTime');

const [Number, String] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
];

const PatientCharacteristicSchema = DataElementSchema({
  authorDatetime: DateTime,
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.3.53' },
  category: { type: String, default: 'patient_characteristic' },
  qdmVersion: { type: String, default: '5.3' },
  _type: { type: String, default: 'PatientCharacteristic' },

});

module.exports.PatientCharacteristicSchema = PatientCharacteristicSchema;
module.exports.PatientCharacteristic = mongoose.model('PatientCharacteristic', PatientCharacteristicSchema);
