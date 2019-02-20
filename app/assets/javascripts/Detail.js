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

const DetailSchema = DataElementSchema({
  sequence: Any,
  revenue: Any,
  category: Any,
  productOrService: Any,
  modifier: Any,
  programCode: Any,
  quantity: Any,
  unitPrice: Any,
  factor: Any,
  net: Any,
  udi: Any,
  subDetail: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'Detail' },

});

module.exports.DetailSchema = DetailSchema;
module.exports.Detail = mongoose.model('Detail', DetailSchema);
