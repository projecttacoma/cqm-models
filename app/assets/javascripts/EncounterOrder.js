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

const EncounterOrderSchema = DataElementSchema({
  authorDatetime: DateTime,
  reason: Code,
  facilityLocation: FacilityLocationSchema,
  negationRationale: Code,
  requester: Any,
  priority: Code,
  qdmTitle: { type: String, default: 'Encounter, Order' },
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.4.27' },
  qdmCategory: { type: String, default: 'encounter' },
  qdmStatus: { type: String, default: 'order' },
  qdmVersion: { type: String, default: '5.5' },
  _type: { type: String, default: 'QDM::EncounterOrder' },

});

module.exports.EncounterOrderSchema = EncounterOrderSchema;
class EncounterOrder extends mongoose.Document {
  constructor(object) {
    super(object, EncounterOrderSchema);
    this._type = 'QDM::EncounterOrder';
  }
}

module.exports.EncounterOrder = EncounterOrder;

