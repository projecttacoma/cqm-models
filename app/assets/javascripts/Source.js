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

const SourceSchema = DataElementSchema({
  context: Any,
  min: Any,
  max: Any,
  type: Any,
  defaultValue: Any,
  element: Any,
  listMode: Any,
  variable: Any,
  condition: Any,
  check: Any,
  logMessage: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'Source' },

});

module.exports.SourceSchema = SourceSchema;
module.exports.Source = mongoose.model('Source', SourceSchema);
