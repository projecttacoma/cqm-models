const mongoose = require('mongoose');
const DataElement = require('./basetypes/DataElement');
const Code = require('./basetypes/Code');
const Interval = require('./basetypes/Interval');
const Quantity = require('./basetypes/Quantity');

const [Number, String, Date] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Date,
];

const AssessmentRecommendedSchema = DataElement.extendSchema(DataElement.DataElementSchema, {
  author_datetime: Date,
  negation_rationale: Code,
  reason: Code,
  method: Code,
  hqmf_oid: { type: String, default: '2.16.840.1.113883.10.20.28.3.118' },
  category: { type: String, default: 'assessment' },
  qdm_status: { type: String, default: 'recommended' },
  qdm_version: { type: String, default: '5.3' },
  _type: { type: String, default: 'AssessmentRecommended' },

});

module.exports.AssessmentRecommendedSchema = AssessmentRecommendedSchema;
module.exports.AssessmentRecommended = mongoose.model('AssessmentRecommended', AssessmentRecommendedSchema);
