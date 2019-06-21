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

const [Number, String] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
];

const MedicationActiveSchema = DataElementSchema({
  relevantDatetime: DateTime,
  relevantPeriod: Interval,
  dosage: Quantity,
  frequency: Code,
  route: Code,
  recorder: Any,
  qdmTitle: { type: String, default: 'Medication, Active' },
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.4.44' },
  qdmCategory: { type: String, default: 'medication' },
  qdmStatus: { type: String, default: 'active' },
  qdmVersion: { type: String, default: '5.5' },
  _type: { type: String, default: 'QDM::MedicationActive' },

});

module.exports.MedicationActiveSchema = MedicationActiveSchema;
class MedicationActive extends mongoose.Document {
  constructor(object) {
    super(object, MedicationActiveSchema);
    this._type = 'QDM::MedicationActive';
  }
}

module.exports.MedicationActive = MedicationActive;

