const mongoose = require('mongoose/browser');

const { IdentifierSchema } = require('./attributes/Identifier');
const { DataElementSchema } = require('./basetypes/DataElement');
const { Code } = require('./basetypes/Code');
const { Interval } = require('./basetypes/Interval');
const { Quantity } = require('./basetypes/Quantity');
const { DateTime } = require('./basetypes/DateTime');
const { QDMDate } = require('./basetypes/QDMDate');
const { Any } = require('./basetypes/Any');
const { ComponentSchema } = require('./attributes/Component');
const { FacilityLocationSchema } = require('./attributes/FacilityLocation');
const { EntitySchema } = require('./attributes/Entity');


const [Number, String] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
];

const MedicationAdministeredSchema = DataElementSchema({
  authorDatetime: DateTime,
  relevantDatetime: DateTime,
  relevantPeriod: Interval,
  dosage: Quantity,
  frequency: Code,
  route: Code,
  reason: Code,
  negationRationale: Code,
  performer: EntitySchema,
  qdmTitle: { type: String, default: 'Medication, Administered' },
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.4.45' },
  qdmCategory: { type: String, default: 'medication' },
  qdmStatus: { type: String, default: 'administered' },
  qdmVersion: { type: String, default: '5.5' },
  _type: { type: String, default: 'QDM::MedicationAdministered' },

});

module.exports.MedicationAdministeredSchema = MedicationAdministeredSchema;
class MedicationAdministered extends mongoose.Document {
  constructor(object) {
    super(object, MedicationAdministeredSchema);
    this._type = 'QDM::MedicationAdministered';
  }
}

module.exports.MedicationAdministered = MedicationAdministered;

