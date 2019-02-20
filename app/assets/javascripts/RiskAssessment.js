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

const RiskAssessmentSchema = DataElementSchema({
  identifier: Any,
  basedOn: Any,
  parent: Any,
  status: Any,
  method: Any,
  code: Any,
  subject: Any,
  context: Any,
  occurrence: Any,
  condition: Any,
  performer: Any,
  reasonCode: Any,
  reasonReference: Any,
  basis: Any,
  prediction: Any,
  mitigation: Any,
  note: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'RiskAssessment' },

});

module.exports.RiskAssessmentSchema = RiskAssessmentSchema;
module.exports.RiskAssessment = mongoose.model('RiskAssessment', RiskAssessmentSchema);
