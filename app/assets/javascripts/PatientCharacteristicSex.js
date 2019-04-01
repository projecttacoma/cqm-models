const mongoose = require('mongoose/browser');

const { IdSchema } = require('./Id');
const { DataElementSchema } = require('./basetypes/DataElement');
const Code = require('./basetypes/Code');
const Interval = require('./basetypes/Interval');
const Quantity = require('./basetypes/Quantity');
const DateTime = require('./basetypes/DateTime');
const Any = require('./basetypes/Any');
const { ComponentSchema } = require('./attributes/Component');
const { FacilityLocationSchema } = require('./attributes/FacilityLocation');


const [Number, String] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
];

const PatientCharacteristicSexSchema = DataElementSchema({
  qdmTitle: { type: String, default: 'Patient Characteristic Sex' },
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.4.55' },
  qdmCategory: { type: String, default: 'patient_characteristic' },
  qdmStatus: { type: String, default: 'gender' },
  qdmVersion: { type: String, default: '5.4' },
  _type: { type: String, default: 'PatientCharacteristicSex' },

});

module.exports.PatientCharacteristicSexSchema = PatientCharacteristicSexSchema;
class PatientCharacteristicSex extends mongoose.Document {
  constructor(object) {
    super(object, PatientCharacteristicSexSchema);
  }
}
module.exports.PatientCharacteristicSex = PatientCharacteristicSex;
