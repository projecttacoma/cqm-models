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
const PatientCharacteristicEthnicitySchema = DataElementSchema({
  hqmfTitle: { type: String, default: 'Patient Characteristic Ethnicity' },
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.3.56' },
  qdmCategory: { type: String, default: 'patient_characteristic' },
  qdmStatus: { type: String, default: 'ethnicity' },
  qdmVersion: { type: String, default: '5.4' },
  _type: { type: String, default: 'PatientCharacteristicEthnicity' },

});
module.exports.PatientCharacteristicEthnicitySchema = PatientCharacteristicEthnicitySchema;
class PatientCharacteristicEthnicity extends mongoose.Document {
  constructor(object) {
    super(object, PatientCharacteristicEthnicitySchema);
  }
}
module.exports.PatientCharacteristicEthnicity = PatientCharacteristicEthnicity;
