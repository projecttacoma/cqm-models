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

const AllergyIntoleranceSchema = DataElementSchema({
  author_datetime: DateTime,
  prevalence_period: Interval,
  type: Code,
  severity: Code,
  hqmf_oid: { type: String, default: '2.16.840.1.113883.10.20.28.3.119' },
  category: { type: String, default: 'allergy' },
  qdm_status: { type: String, default: 'intolerance' },
  qdm_version: { type: String, default: '5.3' },
  _type: { type: String, default: 'AllergyIntolerance' },

});

module.exports.AllergyIntoleranceSchema = AllergyIntoleranceSchema;
module.exports.AllergyIntolerance = mongoose.model('AllergyIntolerance', AllergyIntoleranceSchema);
