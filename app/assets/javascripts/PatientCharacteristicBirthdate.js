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

const PatientCharacteristicBirthdateSchema = DataElementSchema({
  birthDatetime: DateTime,
  qdmTitle: { type: String, default: 'Patient Characteristic Birthdate' },
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.4.54' },
  qdmCategory: { type: String, default: 'patient_characteristic' },
  qdmStatus: { type: String, default: 'birthdate' },
  qdmVersion: { type: String, default: '5.5' },
  _type: { type: String, default: 'QDM::PatientCharacteristicBirthdate' },

});

module.exports.PatientCharacteristicBirthdateSchema = PatientCharacteristicBirthdateSchema;
class PatientCharacteristicBirthdate extends mongoose.Document {
  constructor(object) {
    super(object, PatientCharacteristicBirthdateSchema);
    this._type = 'QDM::PatientCharacteristicBirthdate';
  }
}

module.exports.PatientCharacteristicBirthdate = PatientCharacteristicBirthdate;

