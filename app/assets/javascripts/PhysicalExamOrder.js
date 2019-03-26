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

const PhysicalExamOrderSchema = DataElementSchema({
  authorDatetime: DateTime,
  reason: Code,
  anatomicalLocationSite: Code,
  negationRationale: Code,
  qdmTitle: { type: String, default: 'Physical Exam, Order' },
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.4.61' },
  qdmCategory: { type: String, default: 'physical_exam' },
  qdmStatus: { type: String, default: 'order' },
  hqmfTitle: { type: String, default: 'Physical Exam, Order' },
  qdmVersion: { type: String, default: '5.4' },
  _type: { type: String, default: 'PhysicalExamOrder' },

});

module.exports.PhysicalExamOrderSchema = PhysicalExamOrderSchema;
class PhysicalExamOrder extends mongoose.Document {
  constructor(object) {
    super(object, PhysicalExamOrderSchema);
  }
}
module.exports.PhysicalExamOrder = PhysicalExamOrder;
