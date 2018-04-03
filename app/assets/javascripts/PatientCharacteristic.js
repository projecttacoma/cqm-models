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

const PatientCharacteristicSchema = DataElement.extendSchema(DataElement.DataElementSchema, {
  author_datetime: Date,
  hqmf_oid: { type: String, default: '2.16.840.1.113883.10.20.28.3.53' },
  category: { type: String, default: 'patient_characteristic' },
  qdm_version: { type: String, default: '5.3' },
  class_name: { type: String, default: 'PatientCharacteristic' },

});

module.exports.PatientCharacteristicSchema = PatientCharacteristicSchema;
module.exports.PatientCharacteristic = mongoose.model('PatientCharacteristic', PatientCharacteristicSchema);
