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

const GuidanceResponseSchema = DataElementSchema({
  requestIdentifier: Any,
  identifier: Any,
  module: Any,
  status: Any,
  subject: Any,
  encounter: Any,
  occurrenceDateTime: Any,
  performer: Any,
  reasonCode: Any,
  reasonReference: Any,
  note: Any,
  evaluationMessage: Any,
  outputParameters: Any,
  result: Any,
  dataRequirement: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'GuidanceResponse' },

});

module.exports.GuidanceResponseSchema = GuidanceResponseSchema;
module.exports.GuidanceResponse = mongoose.model('GuidanceResponse', GuidanceResponseSchema);
