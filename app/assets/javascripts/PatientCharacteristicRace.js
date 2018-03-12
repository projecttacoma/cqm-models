const mongoose = require('mongoose');
const DataElement = require('./basetypes/DataElement');
const Code = require('./basetypes/Code');
const Interval = require('./basetypes/Interval');
const Quantity = require('./basetypes/Quantity');

const [Integer, Array, String, Float, Time] = [
  mongoose.Schema.Types.Integer,
  mongoose.Schema.Types.Array,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Float,
  mongoose.Schema.Types.Time,
];

const PatientCharacteristicRaceSchema = DataElement.extendSchema(DataElement.DataElementSchema, {
  hqmf_oid: { type: String, default: '2.16.840.1.113883.10.20.28.3.59' },
  category: { type: String, default: 'patient_characteristic' },
  qdm_status: { type: String, default: 'race' },
  qdm_version: { type: String, default: '5.3' },

});

module.exports.PatientCharacteristicRaceSchema = PatientCharacteristicRaceSchema;
module.exports.PatientCharacteristicRace = mongoose.model('PatientCharacteristicRace', PatientCharacteristicRaceSchema);
