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

const MeasureSchema = DataElementSchema({
  url: Any,
  identifier: Any,
  version: Any,
  name: Any,
  title: Any,
  subtitle: Any,
  status: Any,
  experimental: Any,
  subject: Any,
  date: Any,
  publisher: Any,
  contact: Any,
  description: Any,
  useContext: Any,
  jurisdiction: Any,
  purpose: Any,
  usage: Any,
  copyright: Any,
  approvalDate: Any,
  lastReviewDate: Any,
  effectivePeriod: Any,
  topic: Any,
  author: Any,
  editor: Any,
  reviewer: Any,
  endorser: Any,
  relatedArtifact: Any,
  library: Any,
  disclaimer: Any,
  scoring: Any,
  compositeScoring: Any,
  type: Any,
  riskAdjustment: Any,
  rateAggregation: Any,
  rationale: Any,
  clinicalRecommendationStatement: Any,
  improvementNotation: Any,
  definition: Any,
  guidance: Any,
  group: Any,
  supplementalData: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'Measure' },

});

module.exports.MeasureSchema = MeasureSchema;
module.exports.Measure = mongoose.model('Measure', MeasureSchema);
