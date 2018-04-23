const mongoose = require('mongoose');
const { DataElementSchema } = require('./basetypes/DataElement');
const Code = require('./basetypes/Code');
const Interval = require('./basetypes/Interval');
const Quantity = require('./basetypes/Quantity');
const DateTime = require('./basetypes/DateTime');
const Any = require('./basetypes/Any');

const [Number, String] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
];

const PatientCharacteristicBirthdateSchema = DataElementSchema({
  birthDatetime: DateTime,
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.3.54' },
  category: { type: String, default: 'patient_characteristic' },
  qdmStatus: { type: String, default: 'birthdate' },
  qdmVersion: { type: String, default: '5.3' },
  _type: { type: String, default: 'PatientCharacteristicBirthdate' },

});

module.exports.PatientCharacteristicBirthdateSchema = PatientCharacteristicBirthdateSchema;
module.exports.PatientCharacteristicBirthdate = mongoose.model('PatientCharacteristicBirthdate', PatientCharacteristicBirthdateSchema);
