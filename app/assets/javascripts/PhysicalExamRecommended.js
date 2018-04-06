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

const PhysicalExamRecommendedSchema = DataElement.extendSchema(DataElement.DataElementSchema, {
  author_datetime: Date,
  reason: Code,
  method: Code,
  anatomical_location_site: Code,
  negation_rationale: Code,
  hqmf_oid: { type: String, default: '22.16.840.1.113883.10.20.28.3.63' },
  category: { type: String, default: 'physical_exam' },
  qdm_status: { type: String, default: 'recommended' },
  qdm_version: { type: String, default: '5.3' },
  _type: { type: String, default: 'PhysicalExamRecommended' },

});

module.exports.PhysicalExamRecommendedSchema = PhysicalExamRecommendedSchema;
module.exports.PhysicalExamRecommended = mongoose.model('PhysicalExamRecommended', PhysicalExamRecommendedSchema);
