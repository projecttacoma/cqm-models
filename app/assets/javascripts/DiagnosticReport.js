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

const DiagnosticReportSchema = DataElementSchema({
  identifier: Any,
  basedOn: Any,
  status: Any,
  category: Any,
  code: Any,
  subject: Any,
  encounter: Any,
  effective: Any,
  issued: Any,
  performer: Any,
  resultsInterpreter: Any,
  specimen: Any,
  result: Any,
  imagingStudy: Any,
  media: Any,
  conclusion: Any,
  conclusionCode: Any,
  presentedForm: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'DiagnosticReport' },

});

module.exports.DiagnosticReportSchema = DiagnosticReportSchema;
module.exports.DiagnosticReport = mongoose.model('DiagnosticReport', DiagnosticReportSchema);
