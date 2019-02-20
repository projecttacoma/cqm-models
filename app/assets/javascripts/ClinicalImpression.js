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

const ClinicalImpressionSchema = DataElementSchema({
  identifier: Any,
  status: Any,
  statusReason: Any,
  code: Any,
  description: Any,
  subject: Any,
  encounter: Any,
  effective: Any,
  date: Any,
  assessor: Any,
  previous: Any,
  problem: Any,
  investigation: Any,
  protocol: Any,
  summary: Any,
  finding: Any,
  prognosisCodeableConcept: Any,
  prognosisReference: Any,
  supportingInfo: Any,
  note: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'ClinicalImpression' },

});

module.exports.ClinicalImpressionSchema = ClinicalImpressionSchema;
module.exports.ClinicalImpression = mongoose.model('ClinicalImpression', ClinicalImpressionSchema);
