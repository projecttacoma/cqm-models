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

const SupplyDeliverySchema = DataElementSchema({
  identifier: Any,
  basedOn: Any,
  partOf: Any,
  status: Any,
  patient: Any,
  type: Any,
  suppliedItem: Any,
  occurrence: Any,
  supplier: Any,
  destination: Any,
  receiver: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'SupplyDelivery' },

});

module.exports.SupplyDeliverySchema = SupplyDeliverySchema;
module.exports.SupplyDelivery = mongoose.model('SupplyDelivery', SupplyDeliverySchema);
