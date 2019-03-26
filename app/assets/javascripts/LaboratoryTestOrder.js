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

const LaboratoryTestOrderSchema = DataElementSchema({
  authorDatetime: DateTime,
  reason: Code,
  negationRationale: Code,
  qdmTitle: { type: String, default: 'Laboratory Test, Order' },
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.4.41' },
  qdmCategory: { type: String, default: 'laboratory_test' },
  qdmStatus: { type: String, default: 'order' },
  hqmfTitle: { type: String, default: 'Laboratory Test, Order' },
  qdmVersion: { type: String, default: '5.4' },
  _type: { type: String, default: 'LaboratoryTestOrder' },

});

module.exports.LaboratoryTestOrderSchema = LaboratoryTestOrderSchema;
class LaboratoryTestOrder extends mongoose.Document {
  constructor(object) {
    super(object, LaboratoryTestOrderSchema);
  }
}
module.exports.LaboratoryTestOrder = LaboratoryTestOrder;
