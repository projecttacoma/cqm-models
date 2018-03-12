const mongoose = require('mongoose');
const DataElement = require('./basetypes/DataElement');
const Code = require('./basetypes/Code');
const Interval = require('./basetypes/Interval');
const Quantity = require('./basetypes/Quantity');

const [Integer, Array, String, Float, Time] = [
  mongoose.Schema.Types.Integer,
  mongoose.Schema.Types.Array,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Float,
  mongoose.Schema.Types.Time,
];

const AllergyIntoleranceSchema = DataElement.extendSchema(DataElement.DataElementSchema, {
  author_datetime: Date,
  prevalence_period: Interval,
  type: Code,
  severity: Code,
  hqmf_oid: { type: String, default: '2.16.840.1.113883.10.20.28.3.119' },
  category: { type: String, default: 'allergy' },
  qdm_status: { type: String, default: 'intolerance' },
  qdm_version: { type: String, default: '5.3' },

});

module.exports.AllergyIntoleranceSchema = AllergyIntoleranceSchema;
module.exports.AllergyIntolerance = mongoose.model('AllergyIntolerance', AllergyIntoleranceSchema);
