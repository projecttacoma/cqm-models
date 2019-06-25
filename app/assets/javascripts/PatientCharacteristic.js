const mongoose = require('mongoose/browser');

const { IdentifierSchema } = require('./Identifier');
const { DataElementSchema } = require('./basetypes/DataElement');
const Code = require('./basetypes/Code');
const Interval = require('./basetypes/Interval');
const Quantity = require('./basetypes/Quantity');
const DateTime = require('./basetypes/DateTime');
const Date = require('./basetypes/Date');
const Any = require('./basetypes/Any');
const { ComponentSchema } = require('./attributes/Component');
const { FacilityLocationSchema } = require('./attributes/FacilityLocation');
const { DiagnosisComponentSchema } = require('./attributes/DiagnosisComponent');

const [Number, String] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
];

const PatientCharacteristicSchema = DataElementSchema({
  authorDatetime: DateTime,
  qdmTitle: { type: String, default: 'Patient Characteristic' },
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.4.53' },
  qdmCategory: { type: String, default: 'patient_characteristic' },
  qdmVersion: { type: String, default: '5.5' },
  _type: { type: String, default: 'QDM::PatientCharacteristic' },

});

module.exports.PatientCharacteristicSchema = PatientCharacteristicSchema;
class PatientCharacteristic extends mongoose.Document {
  constructor(object) {
    super(object, PatientCharacteristicSchema);
    this._type = 'QDM::PatientCharacteristic';
  }
}

module.exports.PatientCharacteristic = PatientCharacteristic;

