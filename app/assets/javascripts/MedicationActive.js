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

const MedicationActiveSchema = DataElementSchema({
  relevantPeriod: Interval,
  dosage: Quantity,
  frequency: Code,
  route: Code,
  qdmTitle: { type: String, default: 'Medication, Active' },
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.4.44' },
  qdmCategory: { type: String, default: 'medication' },
  qdmStatus: { type: String, default: 'active' },
  hqmfTitle: { type: String, default: 'Medication, Active' },
  qdmVersion: { type: String, default: '5.4' },
  _type: { type: String, default: 'MedicationActive' },

});

module.exports.MedicationActiveSchema = MedicationActiveSchema;
class MedicationActive extends mongoose.Document {
  constructor(object) {
    super(object, MedicationActiveSchema);
  }
}
module.exports.MedicationActive = MedicationActive;
