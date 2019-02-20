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

const ImmunizationEvaluationSchema = DataElementSchema({
  identifier: Any,
  status: Any,
  patient: Any,
  date: Any,
  authority: Any,
  targetDisease: Any,
  immunizationEvent: Any,
  doseStatus: Any,
  doseStatusReason: Any,
  description: Any,
  series: Any,
  doseNumber: Any,
  seriesDoses: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'ImmunizationEvaluation' },

});

module.exports.ImmunizationEvaluationSchema = ImmunizationEvaluationSchema;
module.exports.ImmunizationEvaluation = mongoose.model('ImmunizationEvaluation', ImmunizationEvaluationSchema);
