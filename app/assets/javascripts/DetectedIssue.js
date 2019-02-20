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

const DetectedIssueSchema = DataElementSchema({
  identifier: Any,
  status: Any,
  code: Any,
  severity: Any,
  patient: Any,
  identified: Any,
  author: Any,
  implicated: Any,
  evidence: Any,
  detail: Any,
  reference: Any,
  mitigation: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'DetectedIssue' },

});

module.exports.DetectedIssueSchema = DetectedIssueSchema;
module.exports.DetectedIssue = mongoose.model('DetectedIssue', DetectedIssueSchema);
