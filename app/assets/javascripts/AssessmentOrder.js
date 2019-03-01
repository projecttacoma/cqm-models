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

const AssessmentOrderSchema = DataElementSchema({
  authorDatetime: DateTime,
  negationRationale: Code,
  reason: Code,
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.4.131' },
  qdmCategory: { type: String, default: 'assessment' },
  qdmStatus: { type: String, default: 'order' },
  qdmVersion: { type: String, default: '5.4' },
  _type: { type: String, default: 'AssessmentOrder' },

});

module.exports.AssessmentOrderSchema = AssessmentOrderSchema;
class AssessmentOrder extends mongoose.Document {
  constructor(object) {
    super(object, AssessmentOrderSchema);
  }
}
module.exports.AssessmentOrder = AssessmentOrder;
