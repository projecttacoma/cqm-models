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

const LaboratoryTestRecommendedSchema = DataElementSchema({
  authorDatetime: DateTime,
  method: Code,
  reason: Code,
  negationRationale: Code,
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.3.43' },
  category: { type: String, default: 'laboratory_test' },
  qdmStatus: { type: String, default: 'recommended' },
  qdmVersion: { type: String, default: '5.3' },
  _type: { type: String, default: 'LaboratoryTestRecommended' },

});

module.exports.LaboratoryTestRecommendedSchema = LaboratoryTestRecommendedSchema;
module.exports.LaboratoryTestRecommended = mongoose.model('LaboratoryTestRecommended', LaboratoryTestRecommendedSchema);
