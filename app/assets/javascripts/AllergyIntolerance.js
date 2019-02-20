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

const AllergyIntoleranceSchema = DataElementSchema({
  identifier: Any,
  clinicalStatus: Any,
  verificationStatus: Any,
  type: Any,
  category: Any,
  criticality: Any,
  code: Any,
  patient: Any,
  encounter: Any,
  onset: Any,
  recordedDate: Any,
  recorder: Any,
  asserter: Any,
  lastOccurrence: Any,
  note: Any,
  reaction: Any,
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.3.119' },
  qdmCategory: { type: String, default: 'allergy' },
  qdmStatus: { type: String, default: 'intolerance' },
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'AllergyIntolerance' },

});

module.exports.AllergyIntoleranceSchema = AllergyIntoleranceSchema;
module.exports.AllergyIntolerance = mongoose.model('AllergyIntolerance', AllergyIntoleranceSchema);
