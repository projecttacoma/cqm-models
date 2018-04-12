const mongoose = require('mongoose');
const { DataElementSchema } = require('./basetypes/DataElement');
const Code = require('./basetypes/Code');
const Interval = require('./basetypes/Interval');
const Quantity = require('./basetypes/Quantity');
const DateTime = require('./basetypes/DateTime');

const [Number, String] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
];

const AssessmentRecommendedSchema = DataElementSchema({
  authorDatetime: DateTime,
  negationRationale: Code,
  reason: Code,
  method: Code,
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.3.118' },
  category: { type: String, default: 'assessment' },
  qdmStatus: { type: String, default: 'recommended' },
  qdmVersion: { type: String, default: '5.3' },
  _type: { type: String, default: 'AssessmentRecommended' },

});

module.exports.AssessmentRecommendedSchema = AssessmentRecommendedSchema;
module.exports.AssessmentRecommended = mongoose.model('AssessmentRecommended', AssessmentRecommendedSchema);
