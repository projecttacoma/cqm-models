const mongoose = require('mongoose');
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
module.exports.AssessmentOrder = mongoose.model('AssessmentOrder', AssessmentOrderSchema);