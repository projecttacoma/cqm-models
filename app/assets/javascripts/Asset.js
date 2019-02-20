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

const AssetSchema = DataElementSchema({
  scope: Any,
  type: Any,
  typeReference: Any,
  subtype: Any,
  relationship: Any,
  context: Any,
  condition: Any,
  periodType: Any,
  period: Any,
  usePeriod: Any,
  text: Any,
  linkId: Any,
  answer: Any,
  securityLabelNumber: Any,
  valuedItem: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'Asset' },

});

module.exports.AssetSchema = AssetSchema;
module.exports.Asset = mongoose.model('Asset', AssetSchema);
