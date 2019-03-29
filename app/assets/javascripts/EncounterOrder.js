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

const EncounterOrderSchema = DataElementSchema({
  authorDatetime: DateTime,
  reason: Code,
  facilityLocation: FacilityLocationSchema,
  negationRationale: Code,
  qdmTitle: { type: String, default: 'Encounter, Order' },
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.4.27' },
  qdmCategory: { type: String, default: 'encounter' },
  qdmStatus: { type: String, default: 'order' },
  qdmVersion: { type: String, default: '5.4' },
  _type: { type: String, default: 'EncounterOrder' },

});

module.exports.EncounterOrderSchema = EncounterOrderSchema;
class EncounterOrder extends mongoose.Document {
  constructor(object) {
    super(object, EncounterOrderSchema);
  }
}
module.exports.EncounterOrder = EncounterOrder;
