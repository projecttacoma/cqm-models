const mongoose = require('mongoose/browser');

const { IdentifierSchema } = require('./attributes/Identifier');
const { DataElementSchema } = require('./basetypes/DataElement');
const Code = require('./basetypes/Code');
const Interval = require('./basetypes/Interval');
const Quantity = require('./basetypes/Quantity');
const DateTime = require('./basetypes/DateTime');
const QDMDate = require('./basetypes/QDMDate');
const Any = require('./basetypes/Any');
const AnyEntity = require('./basetypes/AnyEntity');
const { ComponentSchema } = require('./attributes/Component');
const { FacilityLocationSchema } = require('./attributes/FacilityLocation');
const { EntitySchema } = require('./attributes/Entity');


const [Number, String] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
];

const PatientCharacteristicPayerSchema = DataElementSchema({
  relevantPeriod: Interval,
  qdmTitle: { type: String, default: 'Patient Characteristic Payer' },
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.4.58' },
  qdmCategory: { type: String, default: 'patient_characteristic' },
  qdmStatus: { type: String, default: 'payer' },
  qdmVersion: { type: String, default: '5.6' },
  _type: { type: String, default: 'QDM::PatientCharacteristicPayer' },

});

module.exports.PatientCharacteristicPayerSchema = PatientCharacteristicPayerSchema;
class PatientCharacteristicPayer extends mongoose.Document {
  constructor(object) {
    super(object, PatientCharacteristicPayerSchema);
    this._type = 'QDM::PatientCharacteristicPayer';
  }
}

module.exports.PatientCharacteristicPayer = PatientCharacteristicPayer;

