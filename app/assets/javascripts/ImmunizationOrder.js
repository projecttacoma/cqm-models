const mongoose = require('mongoose/browser');
const { DataElementSchema } = require('./basetypes/DataElement');
const Code = require('./basetypes/Code');
const Interval = require('./basetypes/Interval');
const Quantity = require('./basetypes/Quantity');
const DateTime = require('./basetypes/DateTime');
const { ComponentSchema } = require('./Component');
const { FacilityLocationSchema } = require('./FacilityLocation');
const { IdSchema } = require('./Id');
const Any = require('./basetypes/Any');

const [Number, String] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
];

const ImmunizationOrderSchema = DataElementSchema({
  activeDatetime: DateTime,
  authorDatetime: DateTime,
  dosage: Quantity,
  supply: Quantity,
  reason: Code,
  route: Code,
  negationRationale: Code,
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.3.113' },
  qdmCategory: { type: String, default: 'immunization' },
  qdmStatus: { type: String, default: 'order' },
  qdmVersion: { type: String, default: '5.4' },
  _type: { type: String, default: 'ImmunizationOrder' },

});

module.exports.ImmunizationOrderSchema = ImmunizationOrderSchema;
class ImmunizationOrder extends mongoose.Document {
  constructor(object) {
    super(object, ImmunizationOrderSchema);
  }
}
module.exports.ImmunizationOrder = ImmunizationOrder;
