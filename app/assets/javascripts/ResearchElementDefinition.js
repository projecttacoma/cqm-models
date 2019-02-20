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

const ResearchElementDefinitionSchema = DataElementSchema({
  url: Any,
  identifier: Any,
  version: Any,
  name: Any,
  title: Any,
  shortTitle: Any,
  subtitle: Any,
  status: Any,
  experimental: Any,
  subject: Any,
  date: Any,
  publisher: Any,
  contact: Any,
  description: Any,
  comment: Any,
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
  type: Any,
  variableType: Any,
  characteristic: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'ResearchElementDefinition' },

});

module.exports.ResearchElementDefinitionSchema = ResearchElementDefinitionSchema;
module.exports.ResearchElementDefinition = mongoose.model('ResearchElementDefinition', ResearchElementDefinitionSchema);
