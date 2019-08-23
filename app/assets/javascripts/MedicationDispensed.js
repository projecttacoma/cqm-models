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

const MedicationDispensedSchema = DataElementSchema({
  authorDatetime: DateTime,
  relevantDatetime: DateTime,
  relevantPeriod: Interval,
  refills: Number,
  dosage: Quantity,
  supply: Quantity,
  frequency: Code,
  daysSupplied: Number,
  route: Code,
  prescriber: AnyEntity,
  dispenser: AnyEntity,
  negationRationale: Code,
  qdmTitle: { type: String, default: 'Medication, Dispensed' },
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.4.49' },
  qdmCategory: { type: String, default: 'medication' },
  qdmStatus: { type: String, default: 'dispensed' },
  qdmVersion: { type: String, default: '5.5' },
  _type: { type: String, default: 'QDM::MedicationDispensed' },

});

module.exports.MedicationDispensedSchema = MedicationDispensedSchema;
class MedicationDispensed extends mongoose.Document {
  constructor(object) {
    super(object, MedicationDispensedSchema);
    this._type = 'QDM::MedicationDispensed';
  }
}

module.exports.MedicationDispensed = MedicationDispensed;

