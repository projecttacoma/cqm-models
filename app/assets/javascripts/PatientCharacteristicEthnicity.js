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

const PatientCharacteristicEthnicitySchema = DataElement.extendSchema(DataElement.DataElementSchema, {
  hqmf_oid: { type: String, default: '2.16.840.1.113883.10.20.28.3.56' },
  category: { type: String, default: 'patient_characteristic' },
  qdm_status: { type: String, default: 'ethnicity' },
  qdm_version: { type: String, default: '5.3' },
  _type: { type: String, default: 'PatientCharacteristicEthnicity' },

});

module.exports.PatientCharacteristicEthnicitySchema = PatientCharacteristicEthnicitySchema;
module.exports.PatientCharacteristicEthnicity = mongoose.model('PatientCharacteristicEthnicity', PatientCharacteristicEthnicitySchema);
