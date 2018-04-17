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

const PatientCharacteristicEthnicitySchema = DataElementSchema({
  hqmf_oid: { type: String, default: '2.16.840.1.113883.10.20.28.3.56' },
  category: { type: String, default: 'patient_characteristic' },
  qdm_status: { type: String, default: 'ethnicity' },
  qdm_version: { type: String, default: '5.3' },
  _type: { type: String, default: 'PatientCharacteristicEthnicity' },

});

module.exports.PatientCharacteristicEthnicitySchema = PatientCharacteristicEthnicitySchema;
module.exports.PatientCharacteristicEthnicity = mongoose.model('PatientCharacteristicEthnicity', PatientCharacteristicEthnicitySchema);
