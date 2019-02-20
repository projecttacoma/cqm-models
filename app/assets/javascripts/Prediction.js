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

const PredictionSchema = DataElementSchema({
  outcome: Any,
  probability: Any,
  qualitativeRisk: Any,
  relativeRisk: Any,
  when: Any,
  rationale: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'Prediction' },

});

module.exports.PredictionSchema = PredictionSchema;
module.exports.Prediction = mongoose.model('Prediction', PredictionSchema);
