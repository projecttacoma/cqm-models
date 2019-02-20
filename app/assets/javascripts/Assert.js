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

const AssertSchema = DataElementSchema({
  label: Any,
  description: Any,
  direction: Any,
  compareToSourceId: Any,
  compareToSourceExpression: Any,
  compareToSourcePath: Any,
  contentType: Any,
  expression: Any,
  headerField: Any,
  minimumId: Any,
  navigationLinks: Any,
  operator: Any,
  path: Any,
  requestMethod: Any,
  requestURL: Any,
  resource: Any,
  response: Any,
  responseCode: Any,
  sourceId: Any,
  validateProfileId: Any,
  value: Any,
  warningOnly: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'Assert' },

});

module.exports.AssertSchema = AssertSchema;
module.exports.Assert = mongoose.model('Assert', AssertSchema);
