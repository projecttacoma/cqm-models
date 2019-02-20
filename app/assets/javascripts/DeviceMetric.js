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

const DeviceMetricSchema = DataElementSchema({
  identifier: Any,
  type: Any,
  unit: Any,
  source: Any,
  parent: Any,
  operationalStatus: Any,
  color: Any,
  category: Any,
  measurementPeriod: Any,
  calibration: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'DeviceMetric' },

});

module.exports.DeviceMetricSchema = DeviceMetricSchema;
module.exports.DeviceMetric = mongoose.model('DeviceMetric', DeviceMetricSchema);
