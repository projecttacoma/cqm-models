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

const RequestSchema = DataElementSchema({
  method: Any,
  url: Any,
  ifNoneMatch: Any,
  ifModifiedSince: Any,
  ifMatch: Any,
  ifNoneExist: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'Request' },

});

module.exports.RequestSchema = RequestSchema;
module.exports.Request = mongoose.model('Request', RequestSchema);
