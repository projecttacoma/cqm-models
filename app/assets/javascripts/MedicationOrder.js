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

const MedicationOrderSchema = DataElementSchema({
  authorDatetime: DateTime,
  relevantPeriod: Interval,
  refills: Number,
  dosage: Quantity,
  supply: Quantity,
  frequency: Code,
  daysSupplied: Number,
  route: Code,
  setting: Code,
  reason: Code,
  negationRationale: Code,
  prescriber: [AnyEntity],
  relatedTo: [String],
  qdmTitle: { type: String, default: 'Medication, Order' },
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.4.51' },
  qdmCategory: { type: String, default: 'medication' },
  qdmStatus: { type: String, default: 'order' },
  qdmVersion: { type: String, default: '5.6' },
  _type: { type: String, default: 'QDM::MedicationOrder' },

});

module.exports.MedicationOrderSchema = MedicationOrderSchema;
class MedicationOrder extends mongoose.Document {
  constructor(object) {
    super(object, MedicationOrderSchema);
    this._type = 'QDM::MedicationOrder';
  }
}

module.exports.MedicationOrder = MedicationOrder;

