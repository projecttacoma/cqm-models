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

const RiskEvidenceSynthesisSchema = DataElementSchema({
  url: Any,
  identifier: Any,
  version: Any,
  name: Any,
  title: Any,
  status: Any,
  date: Any,
  publisher: Any,
  contact: Any,
  description: Any,
  note: Any,
  useContext: Any,
  jurisdiction: Any,
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
  synthesisType: Any,
  studyType: Any,
  population: Any,
  exposure: Any,
  outcome: Any,
  sampleSize: Any,
  riskEstimate: Any,
  certainty: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'RiskEvidenceSynthesis' },

});

module.exports.RiskEvidenceSynthesisSchema = RiskEvidenceSynthesisSchema;
module.exports.RiskEvidenceSynthesis = mongoose.model('RiskEvidenceSynthesis', RiskEvidenceSynthesisSchema);
