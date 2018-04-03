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

const PatientCharacteristicSexSchema = DataElement.extendSchema(DataElement.DataElementSchema, {
  qdm_version: { type: String, default: '5.3' },
  class_name: { type: String, default: 'PatientCharacteristicSex' },

});

module.exports.PatientCharacteristicSexSchema = PatientCharacteristicSexSchema;
module.exports.PatientCharacteristicSex = mongoose.model('PatientCharacteristicSex', PatientCharacteristicSexSchema);
