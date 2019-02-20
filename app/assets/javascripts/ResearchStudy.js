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

const ResearchStudySchema = DataElementSchema({
  identifier: Any,
  title: Any,
  protocol: Any,
  partOf: Any,
  status: Any,
  primaryPurposeType: Any,
  phase: Any,
  category: Any,
  focus: Any,
  condition: Any,
  contact: Any,
  relatedArtifact: Any,
  keyword: Any,
  location: Any,
  description: Any,
  enrollment: Any,
  period: Any,
  sponsor: Any,
  principalInvestigator: Any,
  site: Any,
  reasonStopped: Any,
  note: Any,
  arm: Any,
  objective: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'ResearchStudy' },

});

module.exports.ResearchStudySchema = ResearchStudySchema;
module.exports.ResearchStudy = mongoose.model('ResearchStudy', ResearchStudySchema);
