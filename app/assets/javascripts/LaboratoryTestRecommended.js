const mongoose = require('mongoose');
const { DataElementSchema } = require('./basetypes/DataElement');
const Code = require('./basetypes/Code');
const Interval = require('./basetypes/Interval');
const Quantity = require('./basetypes/Quantity');

const [Number, String, Date] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Date,
];

const LaboratoryTestRecommendedSchema = DataElementSchema({
  author_datetime: Date,
  method: Code,
  reason: Code,
  negation_rationale: Code,
  hqmf_oid: { type: String, default: '2.16.840.1.113883.10.20.28.3.43' },
  category: { type: String, default: 'laboratory_test' },
  qdm_status: { type: String, default: 'recommended' },
  qdm_version: { type: String, default: '5.3' },
  _type: { type: String, default: 'LaboratoryTestRecommended' },

});

module.exports.LaboratoryTestRecommendedSchema = LaboratoryTestRecommendedSchema;
module.exports.LaboratoryTestRecommended = mongoose.model('LaboratoryTestRecommended', LaboratoryTestRecommendedSchema);
